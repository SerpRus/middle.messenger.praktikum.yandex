import Block from '../../utils/block';
import template from './template';
import PropsType from '../../types/props';

export default class SignUp extends Block {
    static componentName = 'SignUp';

    static template = template;

    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
