export type AppType = new ($app: HTMLElement | null) => void;

export type PropsType = Record<string, any>;

export type EventsType = {
    events: Record<string,
    () => void>,
};

export type RouteType = {
    page: any,
    props?: PropsType,
};
