import Block from '../../utils/block';
import template from './sign-up.hbs';
import { PropsType } from '../../types';

export default class SignUp extends Block {
    constructor(props: PropsType) {
        super({
            ...props,
        }, template);
    }
}
