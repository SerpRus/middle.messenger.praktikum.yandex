import { nanoid } from 'nanoid';
import { TemplateDelegate } from 'handlebars';

import EventBus from './event-bus';

import { PropsType, EventsType } from '../types';

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    public id = nanoid(6);

    public static className: string = '';

    protected props: PropsType;

    protected refs: Record<string, Block> = {};

    private _eventBus: EventBus;

    private _element: HTMLElement | null = null;

    private readonly _template: TemplateDelegate | undefined;

    constructor(props: PropsType, template?: TemplateDelegate) {
        this.props = this._makePropsProxy(props);

        this._template = template;

        this._eventBus = new EventBus();

        this._registerEvents();

        this._eventBus.emit(Block.EVENTS.INIT);
    }

    _addEvents() {
        const { events = {} } = this.props as EventsType;

        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
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

    private _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: PropsType, newProps: PropsType) {
        return oldProps !== newProps;
    }

    setProps = (nextProps: PropsType) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    private _render() {
        if (!this._template) {
            return;
        }

        const fragment = this.compile(this._template, this.props);

        this.render();

        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    protected compile(template: TemplateDelegate, context: any) {
        const contextAndStubs = { ...context, __refs: this.refs };

        const html = template(contextAndStubs);

        const temp = document.createElement('template');

        temp.innerHTML = html;

        contextAndStubs.__children?.forEach(({ embed }: any) => {
            embed(temp.content);
        });

        return temp.content;
    }

    protected render() {}

    getElement() {
        return this._element;
    }

    _makePropsProxy(props: PropsType) {
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
