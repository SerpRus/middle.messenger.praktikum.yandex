import Handlebars from 'handlebars/runtime';

import '../scss/style.scss';

import Router from './router';
import partials from './partials';
import registerHelpers from './helpers';
import routes from './routes.ts';

declare global {
    interface Window { router: any; }
}

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        this.$root = $app;

        this.init();
    }

    init() {
        this.registerPartials();
        registerHelpers();

        const router = new Router(this.$root);
        window.router = router;

        router.routes = routes;

        let pathname;

        // TODO: тестовый редирект на страницу входа, если пользователь не авторизован
        if (localStorage.getItem('isAuthorized')) {
            pathname = new URL(window.location.href).pathname;
        } else {
            pathname = '/sign-in'
        }

        window.router.render(pathname);
    }

    registerPartials() {
        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];
            const key = Object.keys(partial)[0];

            Handlebars.registerPartial(key, partial[key]);
        }
    }
}
