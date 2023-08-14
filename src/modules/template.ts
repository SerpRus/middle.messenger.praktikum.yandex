import Block from '../utils/block';

export default class Template {
    template: Block;

    $root: HTMLElement;

    props?: object;

    constructor(template: any, $root: HTMLElement, props?: object) {
        this.template = template;
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        const TemplateClass = this.template;
        // @ts-ignore
        const templateInstance = new TemplateClass(this.props);

        this.$root.innerHTML = '';
        this.$root.append(templateInstance.getContent());
    }
}
