import Template from '../../modules/template';

import signUp from './sign-up.hbs';

export default class SignUp extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = signUp(this.props);
    }
}
