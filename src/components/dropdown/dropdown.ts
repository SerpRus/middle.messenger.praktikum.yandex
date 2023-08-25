import Block from '../../utils/block';
import template from './dropdown.hbs';

interface DropdownProps {
    classes: string,
}

export default class Dropdown extends Block {
    constructor(props?: DropdownProps) {
        super({
            ...props,
        }, template);
    }
}