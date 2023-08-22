import Block from '../../utils/block';
import template from './error-page.hbs';
import { PropsType } from '../../types';

export default class ErrorPage extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
