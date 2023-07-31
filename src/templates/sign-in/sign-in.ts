import Template from '../../modules/template';

import signIn from './sign-in.hbs';

import Authorization from '../../modules/authorization';

export default class SignIn extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();

        new Authorization();
    }

    changeHTML() {
        this.$root.innerHTML = signIn(this.props);
    }
}
