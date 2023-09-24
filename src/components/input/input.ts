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
    static componentName = 'Input';

    constructor(props: InputProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
