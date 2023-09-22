import Block from '../../utils/block';
import template from './dropdown.hbs';

interface DropdownProps {
    classes?: string,
}

export default class Dropdown extends Block<DropdownProps> {
    static componentName = 'Dropdown';

    constructor(props: DropdownProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
