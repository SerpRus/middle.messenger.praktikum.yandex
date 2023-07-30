import Handlebars from 'handlebars/runtime';

import '../scss/style.scss';

import Router from './router';

import partials from './partials';

import Home from '../templates/home';
import Login from '../templates/login';

// // @ts-ignore
// import home from '/templates/home/home.hbs';
// @ts-ignore
// import login from '/templates/login.hbs';
// @ts-ignore
// import notFound from '/templates/not-found.hbs';

import TemplateType from '../types/template';

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        this.$root = $app;

        this.init();
    }

    init() {
        this.registerPartials();

        const router = new Router(this.$root);

        router.routes = {
            '/': {
                component: Home as unknown as TemplateType,
            },
            '/login': {
                component: Login as unknown as TemplateType,
            },
        };

        router.render(new URL(window.location.href).pathname);
    }

    registerPartials() {
        for (let i = 0; i < partials.length; i++) {
            const partial = partials[i];
            const key = Object.keys(partial)[0];

            Handlebars.registerPartial(key, partial[key]);
        }
    }
}
