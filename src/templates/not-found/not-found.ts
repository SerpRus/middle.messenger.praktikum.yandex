import Template from '../../modules/template';

// @ts-ignore
import notFound from './not-found.hbs';

export default class NotFound extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root:HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = notFound(this.props);
        document.querySelector('button')?.addEventListener('click', () => {
            console.log('click')
        })
    }
}
