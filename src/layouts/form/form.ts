import Block from '../../utils/block';
import template from './form.hbs';

interface FormProps {
    classes: string,
}


export default class Form extends Block {
    constructor(props?: FormProps) {
        super({
            ...props,
        }, template);
    }
}
