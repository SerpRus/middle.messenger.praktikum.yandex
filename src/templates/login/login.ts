import Template from '../../modules/template';

// @ts-ignore
import login from './login.hbs';

export default class Login extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = login(this.props);
        document.querySelector('button')?.addEventListener('click', () => {
            console.log('click1')
        })
    }
}
