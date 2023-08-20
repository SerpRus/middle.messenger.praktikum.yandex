import { nanoid } from 'nanoid';

import compile from './compile';
import EventBus from './event-bus';

import PropsType from '../types/props';

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    public id: string = nanoid(6);

    public static componentName: string;

    protected template: string = '';

    protected props: PropsType = {};

    protected refs: Record<string, Block> = {};

    protected readonly events: Record<string, any> = {};

    private _children: Block[] = [];

    private _domElement: HTMLElement | null = null;

    private _eventBus: EventBus;

    constructor(props: PropsType, template?: string) {
        this.template = template || '';
        this.props = this._makePropsProxy(props);
        Object.entries(this.customProps()).forEach(([key, value]) => {
            this.props[key] = value;
        });

        this._eventBus = new EventBus();
        this._registerEvents();
        this._eventBus.emit(Block.EVENTS.INIT);
    }

    init() {
        this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }

    private _registerEvents() {
        this._eventBus.on(Block.EVENTS.INIT, this.init.bind(this));

        this._eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        this._eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    protected customProps() {
        return {};
    }

    public setProps(props: PropsType) {
        if (!props) {
            return;
        }

        Object.assign(this.props, props);
    }

    public element(): HTMLElement {
        return this._domElement as HTMLElement;
    }

    public destroy() {
        this.unmountComponent();
        if (this._domElement) {
            this._domElement.replaceWith(document.createElement('template'));
        }
    }

    private _componentDidMount() {
        this.componentDidMount();
    }

    protected componentDidMount() {}

    public dispatchComponentDidMount() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps: any, newProps: any) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this._eventBus.emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    componentDidUpdate(oldProps: PropsType, newProps: PropsType) {
        return oldProps !== newProps;
    }

    public dispatchComponentDidUpdate() {
        this._eventBus.emit(Block.EVENTS.FLOW_CDU);
    }

    protected componentWillUnmount() {}

    private _attachListeners() {
        const addEventListener = (
            element: HTMLElement | Block,
            event: string,
            callback: () => void
        ) => {
            if (element && callback) {
                (element instanceof Element ? element : element.element())
                    .addEventListener(event, callback);
            }
        };

        for (let i = 0; i < Object.keys(this.events).length; i += 1) {
            const refOrEvent = Object.keys(this.events)[i];
            const eventsOrCallback = this.events[refOrEvent];
            if (typeof eventsOrCallback === 'function') {
                addEventListener(this.element(), refOrEvent, eventsOrCallback);
            } else {
                for (let j = 0; j < Object.keys(eventsOrCallback).length; j += 1) {
                    const event = Object.keys(eventsOrCallback)[j];
                    addEventListener(this.refs[refOrEvent], event, eventsOrCallback[event]);
                }
            }
        }
    }

    private removeListeners() {}

    private mountComponent() {
        this._attachListeners();
        this.componentDidMount();
    }

    private unmountComponent() {
        if (this._domElement) {
            this.componentWillUnmount();
            this.removeListeners();
            this._children.reverse().forEach((child: Block) => child.unmountComponent());
        }
    }

    private _render() {
        this.unmountComponent();

        const fragment = this._compile() as HTMLElement;

        if (this._domElement) {
            this._domElement.replaceWith(fragment);
        }

        this._domElement = fragment;

        this.mountComponent();
    }

    private _makePropsProxy(props: any) {
        const self = this;

        return new Proxy(props as unknown as object, {
            get(target: Record<string, unknown>, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target: Record<string, unknown>, prop: string, value: unknown) {
                const oldProps = { ...target };

                target[prop] = value;

                self._eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target);

                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    private _compile() {
        const { html, children, refs } = compile(this.template, this.props);

        this._children = children.map((child: any) => child.component);

        const templateElement = document.createElement('template');
        templateElement.innerHTML = html;
        const fragment = templateElement.content;

        this.refs = Array.from(fragment.querySelectorAll('[ref]')).reduce((list: any, element) => {
            const key = element.getAttribute('ref') as string;
            list[key] = element;
            element.removeAttribute('ref');
            return list;
        }, refs);

        children.forEach((child: {
            component: Block, embed: (node: DocumentFragment) => void
        }) => child.embed(fragment));

        if (!fragment.firstElementChild || fragment.firstElementChild?.nextElementSibling) {
            throw new Error('Error!');
        }

        return fragment.firstElementChild;
    }
}
