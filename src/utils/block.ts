import { nanoid } from 'nanoid';
import EventBus from './event-bus';

type BlockPropsType = {
    [key: string]: any,
};

type BlockChildrenType = {
    [key: string]: Block | Block[],
};

type BlockEveentsType = {
    [key: string]: () => void,
};

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    } as const;

    public id: string = nanoid(6);

    protected props: BlockPropsType;

    public children: Record<string, Block | Block[]>;

    private eventBus: () => EventBus;

    private _element: HTMLElement | null = null;

    constructor(propsWithChildren: BlockPropsType) {
        const eventBus = new EventBus();

        const { props, children } = Block._getChildrenAndProps(propsWithChildren);

        this.children = children;
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    private static _getChildrenAndProps(childrenAndProps: BlockPropsType) {
        const props: BlockPropsType = {};
        const children: BlockChildrenType = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (
                Array.isArray(value)
                && value.length > 0
                && value.every((v) => v instanceof Block)
            ) {
                children[key as string] = value;
            } else if (value instanceof Block) {
                children[key as string] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props as { events: BlockEveentsType };

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    private _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    private _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((ch) => ch.dispatchComponentDidMount());
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    private _componentDidUpdate(oldProps: BlockPropsType, newProps: BlockPropsType) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: BlockPropsType, newProps: BlockPropsType) {
        return oldProps !== newProps;
    }

    setProps = (nextProps: BlockPropsType) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment: DocumentFragment = this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element && newElement) {
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    protected compile(template: (context: any) => string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component
                    .map((child) => `<div data-id="${child.id}"></div>`);
            } else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });

        const html = template(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        const replaceStub = (component: Block) => {
            const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

            if (!stub) {
                return;
            }

            component.getContent()?.append(...Array.from(stub.childNodes));

            stub.replaceWith(component.getContent()!);
        };

        Object.entries(this.children).forEach((child) => {
            const component = child[1];

            if (Array.isArray(component)) {
                component.forEach(replaceStub);
            } else {
                replaceStub(component);
            }
        });

        return temp.content;
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    private _makePropsProxy(props: BlockPropsType) {
        const self = this;

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                const oldTarget = { ...target };

                target[prop] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }
}
