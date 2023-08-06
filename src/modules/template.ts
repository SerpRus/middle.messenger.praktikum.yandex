import { TemplateDelegate } from 'handlebars'

export default class Template {
    template: TemplateDelegate;
    $root: HTMLElement;
    props?: object;

    constructor(template: TemplateDelegate, $root: HTMLElement, props?: object) {
        this.$root = $root;
        this.props = props;
        this.template = template

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = this.template(this.props);
    }
}
