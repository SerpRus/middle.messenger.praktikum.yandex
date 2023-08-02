import RouteType from '../types/route';

import ErrorPage from '../templates/error-page';

export default class Router {
    $root: HTMLElement | null;

    routes: RouteType;

    constructor($root: HTMLElement | null) {
        this.$root = $root;
        this.routes = {};

        this.init();
    }

    init() {
        this.initHandlers();
    }

    initHandlers() {
        const $links = document.querySelectorAll('a[href^="/"]');

        $links.forEach((el) => {
            el.addEventListener('click', this.linkClickHandler);
        });

        window.addEventListener('popstate', this.onPopstateHandler)
    }

    linkClickHandler = (e: Event) => {
        e.preventDefault();

        const $target = e.currentTarget as HTMLLinkElement;

        const { pathname } = new URL($target.href);

        this.render(pathname);
    };

    onPopstateHandler = (e: PopStateEvent) => {
        const { path } = e.state;

        this.render(path);
    }

    render(path: string, props?: object) {
        if (!this.$root) {
            return;
        }

        const route = this.routes[path];

        if (!route) {
            new ErrorPage(this.$root, {
                code: '404',
                description: 'Не туда попали',
                link: {
                    href: '/',
                    text: 'Назад к чатам',
                },
            });
        } else {
            const { page } = route;

            if (!props) {
                props = route.props
            }

            new page(this.$root, props);
        }

        this.initHandlers();

        window.history.pushState({ path }, path, path);
    }
}
