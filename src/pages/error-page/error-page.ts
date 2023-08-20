import Block from '../../utils/block';
import template from './template';

import PropsType from '../../types/props';

export default class ErrorPage extends Block {
    static componentName = 'ErrorPage';

    static template = template;

    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
