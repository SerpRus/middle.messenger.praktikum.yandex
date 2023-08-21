import Block from '../../utils/block';
import template from './form.hbs';
import { PropsType } from '../../types';

export default class Form extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
