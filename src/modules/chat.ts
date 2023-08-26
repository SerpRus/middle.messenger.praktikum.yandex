import '../scss/style.scss';

import Router from './router';
import routes from './routes';
import { RouteType } from '../types';
import Block from '../utils/block';

import components from './components';
import registerComponent from '../utils/register-component';

declare global {
    interface Window { router: Router; }
}

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        components.forEach((component) => registerComponent(component as typeof Block));

        this.$root = $app;

        this.init();
    }

    init() {
        const router = new Router(this.$root);
        window.router = router;

        router.routes = routes as Record<string, RouteType>;

        const { pathname } = new URL(window.location.href);

        window.router.render(pathname);
    }
}
