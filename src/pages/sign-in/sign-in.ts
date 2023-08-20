import Block from '../../utils/block';
import template from './template';
import PropsType from '../../types/props';

export default class SignIn extends Block {
    static componentName = 'SignIn';

    static template = template;

    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
