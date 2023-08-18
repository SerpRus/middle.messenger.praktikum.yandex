import { nanoid } from 'nanoid';
import Handlebars from 'handlebars';

import EventBus from './event-bus';

import PropsType from '../../types/props';

// Нельзя создавать экземпляр данного класса
class Block<P extends PropsType> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    public id = nanoid(6);

    private _element: HTMLElement | null = null;
    private _meta: { props: P };

    protected props: P;
    protected children: Record<string, Block>;
    private eventBus: () => EventBus;

    protected refs: Record<string, Block> = {};

    public static componentName?: string;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(propsAndChildren: any = {}) {
        const eventBus = new EventBus();
        const { props, children } = this.getChildren(propsAndChildren);

        this.children = children;

        this._meta = {
            props,
        };

        this.props = this._makePropsProxy(props);

        this.initChildren();
        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    getChildren(propsAndChildren: any) {
        const children: any = {};
        const props: any = {};

        Object.entries(propsAndChildren).map(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else if (Array.isArray(value) && value.every(v => (v instanceof Block))) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    protected initChildren() {

    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));

        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {
    }

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: any, newProps: any) {
        return true;
    }

    setProps = (nextProps: any) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element(): HTMLElement | null {
        console.log(this._element)
        return this._element;
    }

    _render() {
        const templateString = this.render();
        console.log(templateString)

        const fragment = this.compile(templateString, { ...this.props });

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._removeEvents();
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    // Переопределяется пользователем. Необходимо вернуть разметку
    protected render(): string {
        return '';
    }

    getContent(): HTMLElement | null {
        return this.element;
    }

    _makePropsProxy(props: any) {
        // Ещё один способ передачи this, но он больше не применяется с приходом ES6+
        const self = this;

        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                const oldProps = {...target};

                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в след итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);

                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _removeEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events || !this._element) {
            return;
        }


        Object.entries(events).forEach(([event, listener]) => {
            this._element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const events: Record<string, () => void> = (this.props as any).events;

        if (!events) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    _createDocumentElement(tagName: string): HTMLElement {
        // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
        return document.createElement(tagName);
    }


    // protected compile(template: (context: any) => string, context: any) {
    //     const contextAndStubs = { ...context };
    //
    //     Object.entries(this.children).forEach(([name, component]) => {
    //         if (Array.isArray(component)) {
    //             contextAndStubs[name] = component
    //                 .map((child) => `<div data-id="${child.id}"></div>`);
    //         } else {
    //             contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
    //         }
    //     });
    //
    //     const html = template(contextAndStubs);
    //
    //     const temp = document.createElement('template');
    //
    //     temp.innerHTML = html;
    //
    //     const replaceStub = (component: Block) => {
    //         const stub = temp.content.querySelector(`[data-id="${component.id}"]`);
    //
    //         if (!stub) {
    //             return;
    //         }
    //
    //         component.getContent()?.append(...Array.from(stub.childNodes));
    //
    //         stub.replaceWith(component.getContent()!);
    //     };
    //
    //     Object.entries(this.children).forEach((child) => {
    //         const component = child[1];
    //
    //         if (Array.isArray(component)) {
    //             component.forEach(replaceStub);
    //         } else {
    //             replaceStub(component);
    //         }
    //     });
    //
    //     return temp.content;
    // }

    compile(templateString: string, context: any) {
        const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

        const template = Handlebars.compile(templateString);

        const htmlString = template({...context, children: this.children, refs: this.refs });

        fragment.innerHTML = htmlString;

        Object.entries(this.children).forEach(([key, child]) => {
            const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

            if (!stub) {
                return;
            }

            const content = child.getContent()!;

            stub.replaceWith(content);

            if (stub.childNodes.length) {
                content.append(...stub.childNodes);
            }
        });

        return fragment.content;
    }
}

export default Block;
