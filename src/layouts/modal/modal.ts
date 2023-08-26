import Block from '../../utils/block';
import template from './modal.hbs';

interface ModalProps {
    classes?: string,
}

export default class Modal extends Block<ModalProps> {
    static className = 'Modal';

    constructor(props: ModalProps) {
        super({
            ...props,
        }, template);
    }
}
