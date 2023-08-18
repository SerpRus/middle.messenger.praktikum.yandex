import Block from '../utils/block';

import PropsType from '../types/props';

export default class Template<P extends PropsType> {
    template: Block;

    $root: HTMLElement;

    props?: PropsType;

    constructor(template: Block, $root: HTMLElement, props?: P) {
        this.template = template;
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        const TemplateClass = this.template;
        console.log(TemplateClass )
        // @ts-ignore
        const templateInstance = new TemplateClass(this.props);
        console.log(templateInstance.getContent())

        this.$root.innerHTML = '';
        this.$root.append(templateInstance.getContent());
    }
}
