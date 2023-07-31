import Handlebars from 'handlebars/runtime';

import '../scss/style.scss';

import Router from './router';
import partials from './partials';
import routes from './routes.ts';

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        this.$root = $app;

        this.init();
    }

    init() {
        this.registerPartials();

        const router = new Router(this.$root);

        router.routes = routes;

        let pathname;

        // TODO: тестовый редирект на страницу входа, если пользователь не авторизован
        if (localStorage.getItem('isAuthorized')) {
            pathname = new URL(window.location.href).pathname;
        } else {
            pathname = '/sign-in'
        }

        router.render(pathname);
    }

    registerPartials() {
        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];
            const key = Object.keys(partial)[0];

            Handlebars.registerPartial(key, partial[key]);
        }
    }
}
