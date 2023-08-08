import RouteType from '../types/route';

import errorPage from '../templates/error-page/error-page.hbs';

import Template from './template.ts';

export default class Router {
    $root: HTMLElement | null;

    routes: RouteType = {};

    pageHistory: string[] = [];

    constructor($root: HTMLElement | null) {
        this.$root = $root;

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

        window.addEventListener('popstate', this.onPopstateHandler);
    }

    linkClickHandler = (e: Event) => {
        e.preventDefault();

        const currentPath = location.pathname;

        this.pageHistory.push(currentPath);


        const $target = e.currentTarget as HTMLLinkElement;

        const { pathname } = new URL($target.href);

        this.render(pathname);
    };

    onPopstateHandler = () => {
        if (!this.pageHistory.length) {
            return;
        }

        const path = this.pageHistory[this.pageHistory.length - 1];
        this.pageHistory.pop();

        this.render(path);
    }

    render(path: string, props?: object) {
        if (!this.$root) {
            return;
        }

        const route = this.routes[path];

        if (!route) {
            new Template(errorPage, this.$root, {
                code: '404',
                description: 'Не туда попали',
                link: {
                    href: '/chats',
                    text: 'Назад к чатам',
                },
            });
        } else {
            const { page } = route;

            if (!props) {
                props = route.props;
            }

            new Template(page, this.$root, props);
        }

        this.initHandlers();

        window.history.pushState({ path }, path, path);
    }
}
