import Block from '../../utils/block';
import template from './modal.hbs';

interface ModalProps {
    classes?: string,
}

export default class Modal extends Block<ModalProps> {
    static componentName = 'Modal';

    constructor(props: ModalProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
