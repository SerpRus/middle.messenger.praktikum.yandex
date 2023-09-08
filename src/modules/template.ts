import Block from '../utils/block';

export default class Template<P extends Record<string, any>> {
    template: typeof Block;

    $root: HTMLElement;

    props: P;

    constructor(template: typeof Block, $root: HTMLElement, props: P) {
        this.template = template;
        this.$root = $root;

        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        const TemplateClass = this.template;
        const templateInstance = new TemplateClass(this.props);

        this.$root.innerHTML = '';
        this.$root.append(templateInstance.getElement());
    }
}
