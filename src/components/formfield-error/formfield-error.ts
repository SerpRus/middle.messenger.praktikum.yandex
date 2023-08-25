import Block from '../../utils/block';
import template from './formfield-error.hbs';

interface FormfieldProps {
    classes?: string,
    error?: string,
}

export default class FormfieldError extends Block {
    constructor(props?: FormfieldProps) {
        super({
            ...props,
        }, template);
    }
}
