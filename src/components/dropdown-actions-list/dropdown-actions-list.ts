import Block from '../../utils/block';
import template from './dropdown-actions-list.hbs';

interface DropdownActionsListProps {
    classes: string,
}

export default class DropdownActionsList extends Block {
    constructor(props?: DropdownActionsListProps) {
        super({
            ...props,
        }, template);
    }
}
