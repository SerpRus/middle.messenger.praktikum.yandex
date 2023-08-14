import '../scss/style.scss';

import AppType from '../types/app';

export default class CreateApp {
    $root: HTMLElement | null;

    constructor(rootSelector: string) {
        this.$root = document.querySelector(rootSelector);
    }

    render(App: AppType) {
        if (!this.$root) {
            return;
        }

        new App(this.$root);
    }
}
