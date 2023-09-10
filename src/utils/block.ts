import { nanoid } from 'nanoid';
import { TemplateDelegate } from 'handlebars';

import EventBus from './event-bus';

class Block<P extends Record<string, any> = any> {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    } as const;

    public id = nanoid(6);

    public static className: string = '';

    protected props: P;

    protected refs: Record<string, any> = {};

    private _eventBus: EventBus;

    protected element: HTMLElement | null = null;

    private readonly _template: TemplateDelegate | undefined;

    constructor(props: P, template?: TemplateDelegate) {
        this.props = this._makePropsProxy(props) as P;

        this._template = template;

        this._eventBus = new EventBus();

        this._registerEvents();

        this._eventBus.emit(Block.EVENTS.INIT);
    }

    _removeEvents() {
        const { events } : Record<string, () => void> = this.props;

        if (!events || !this.element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            this.element!.removeEventListener(event, listener);
        });
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element?.addEventListener(eventName, events[eventName]);
        });
    }

    _registerEvents() {
        this._eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();

        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps: P, newProps: P) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: P, newProps: P) {
        return oldProps !== newProps;
    }

    setProps = (nextProps: P) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    private _render() {
        if (!this._template) {
            return;
        }

        this._removeEvents();

        const fragment = this.compile(this._template, this.props);

        this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this.element && newElement) {
            this.element.replaceWith(newElement);
        }

        this.element = newElement;

        this._addEvents();
    }

    protected compile(template: TemplateDelegate, context: P) {
        const contextAndStubs = { ...context, __refs: this.refs };

        const html = template(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        contextAndStubs.__children?.forEach(({ embed }: P) => {
            embed(temp.content);
        });

        return temp.content;
    }

    protected render() {}

    getElement(): HTMLElement {
        return this.element as HTMLElement;
    }

    _makePropsProxy(props: Record<string, any>) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop as string];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = { ...target };

                target[prop as string] = value;

                self._eventBus.emit(Block.EVENTS.FLOW_CDU, oldTarget, target);

                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            }
        });
    }

    show() {
        this.getElement()!.style.display = 'block';
    }

    hide() {
        this.getElement()!.style.display = 'none';
    }
}

export default Block;
