import Block from '../../utils/block';
import template from './template';
import PropsType from '../../types/props';

export default class Form extends Block {
    static componentName = 'Form';

    static template = template;

    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
