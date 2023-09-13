import Block from '../../utils/block';
import template from './dropdown-content.hbs';

interface DropdownContentProps {
    classes?: string,
}

export default class DropdownContent extends Block<DropdownContentProps> {
    static componentName = 'DropdownContent';

    constructor(props: DropdownContentProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
