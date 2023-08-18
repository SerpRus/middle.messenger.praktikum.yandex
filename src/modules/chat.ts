import Handlebars from 'handlebars';

import '../scss/style.scss';

import Router from './router';
import routes from './routes';

import components from './components';
import registerComponent from '../utils/register-component';

declare global {
    interface Window { router: Router; }
}

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        components.forEach((component) => registerComponent(component));
        Handlebars.registerHelper("bold", function(options) {
            return new Handlebars.SafeString('<div class="mybold">' + options.fn(this) + "</div>");
        });

        this.$root = $app;

        this.init();
    }

    init() {
        const router = new Router(this.$root);
        window.router = router;

        router.routes = routes;

        const { pathname } = new URL(window.location.href);

        window.router.render(pathname);
    }
}
