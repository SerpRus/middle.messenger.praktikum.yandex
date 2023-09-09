import Block from '../../utils/block';
import template from './formfield-error.hbs';

interface FormfieldProps {
    classes?: string,
    error?: string,
    ref?: string,
}

export default class FormfieldError extends Block<FormfieldProps> {
    static className = 'FormfieldError';

    constructor(props: FormfieldProps) {
        super({
            ...props,
        }, template);
    }
}
