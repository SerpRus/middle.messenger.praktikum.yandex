import Template from '../../modules/template';

import profile from './profile.hbs';

export default class Profile extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = profile(this.props);
    }
}
