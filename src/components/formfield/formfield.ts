import Block from '../../utils/block';
import template from './formfield.hbs';

interface FormfieldProps {
    classes?: string,
}

export default class Formfield extends Block<FormfieldProps> {
    static className = 'Formfield';

    constructor(props: FormfieldProps) {
        super({
            ...props,
        }, template);
    }
}
