import Block from '../../utils/block';
import template from './formfield.hbs';

interface FormfieldProps {
    classes?: string,
    events?: {
        input?: (e: Event) => void;
    };
    onInput: (e: Event) => void;
}

export default class Formfield extends Block<FormfieldProps> {
    static className = 'Formfield';

    constructor(props: FormfieldProps) {
        super({
            ...props,
            events: {
                input: props.onInput
            },
        }, template);
    }
}
