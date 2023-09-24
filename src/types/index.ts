import Block from '../utils/block';

export type AppType = new ($app: HTMLElement | null) => void;

export type PropsType = Record<string, any>;

export type EventsType = {
    events: Record<string,
    () => void>,
};

export type RouteType = {
    page: typeof Block,
    props?: PropsType,
};

export type Indexed<T = unknown> = {
    [key in string]: T;
};
