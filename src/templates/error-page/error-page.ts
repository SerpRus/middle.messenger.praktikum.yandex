import Template from '../../modules/template';

import errorPage from './error-page.hbs';

export default class ErrorPage extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root:HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = errorPage(this.props);
    }
}
