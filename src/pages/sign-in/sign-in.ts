import Block from '../../utils/block';
import template from './sign-in.hbs';
import { PropsType } from '../../types';

export default class SignIn extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
