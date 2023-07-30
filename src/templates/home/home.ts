import Template from '../../modules/template';

// @ts-ignore
import home from './home.hbs';

export default class Home extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = home(this.props);
        document.querySelector('button')?.addEventListener('click', () => {
            console.log('click2')
        })
    }
}
