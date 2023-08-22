import Block from '../../utils/block.ts';
import template from './modal.hbs';

interface ModalProps {
    classes: string,
}

export default class Modal extends Block {
    constructor(props?: ModalProps) {
        super({
            ...props,
        }, template);
    }
}
