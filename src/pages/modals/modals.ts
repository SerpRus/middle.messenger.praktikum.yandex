import Block from '../../utils/block';
import template from './modals.hbs';
import { PropsType } from '../../types';

export default class ErrorPage extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
