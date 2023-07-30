import RouteType from '../types/route';

import NotFound from '../templates/not-found';

export default class Router {
    $root: HTMLElement | null;

    routes: RouteType;

    attributes = {
        props: 'data-props',
    }

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
    }

    linkClickHandler = (e: Event) => {
        e.preventDefault();

        const $target = e.target as HTMLLinkElement;

        const propsString: string | null = $target.getAttribute(this.attributes.props);
        let props: object | undefined;
        if (propsString) {
            props = JSON.parse(propsString);
        }

        const { pathname } = new URL($target.href);

        this.render(pathname, props);
    };

    render(path: string, props?: object) {
        if (!this.$root) {
            return;
        }

        const route = this.routes[path];

        if (!route) {
            new NotFound(this.$root, {username: 'Dima'}).changeHTML();
        } else {
            const { component } = route;
            new component(this.$root, props);
        }

        this.initHandlers();

        window.history.pushState({ path }, path, path);
    }
}
