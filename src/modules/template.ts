// import Block from '../utils/block';
// import { IBlock } from '../types/block';

import { PropsType } from '../types';

export default class Template {
    // template: IBlock;
    template: any;

    $root: HTMLElement;

    props?: PropsType;

    constructor(template: any, $root: HTMLElement, props?: PropsType) {
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
