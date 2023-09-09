import Block from '../../utils/block';
import template from './input.hbs';

interface InputProps {
    id: string,
    classes?: string,
    name: string,
    type?: string,
    value?: string,
    placeholder?: string,
    disabled?: string,
}

export default class Input extends Block<InputProps> {
    static className = 'Input';

    constructor(props: InputProps) {
        super({
            ...props,
        }, template);
    }
}
