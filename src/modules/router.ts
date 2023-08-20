// import NotFoundPage from '../pages/not-found-page';
import ErrorPage from '../pages/error-page';
import Template from './template';

import RouteType from '../types/route';
import PropsType from '../types/props';

export default class Router {
    $root: HTMLElement | null;

    routes: Record<string, RouteType> = {};

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

        const currentPath = window.location.pathname;

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
    };

    render(path: string, props?: PropsType) {
        if (!this.$root) {
            return;
        }

        const route = this.routes[path];

        if (!route) {
            new Template(
                ErrorPage,
                this.$root,
                {
                    code: '404',
                    description: 'Не туда попали'
                } as PropsType
            );
        } else {
            const { page } = route;
            const currentProps = (props) || route.props;

            new Template(page, this.$root, currentProps);
        }

        this.initHandlers();

        window.history.pushState({ path }, path, path);
    }
}
