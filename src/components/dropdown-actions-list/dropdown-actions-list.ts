import Block from '../../utils/block';
import template from './dropdown-actions-list.hbs';

interface DropdownActionsListProps {
    classes?: string,
}

export default class DropdownActionsList extends Block<DropdownActionsListProps> {
    static componentName = 'DropdownActionsList';

    constructor(props: DropdownActionsListProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
