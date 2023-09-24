import Block from '../../utils/block';
import template from './modal.hbs';
import modalUtil from '../../utils/modal-util';

interface ModalProps {
    classes?: string,
    onOverlayCLick?: () => void,
}

export default class Modal extends Block<ModalProps> {
    static componentName = 'Modal';

    constructor(props: ModalProps) {
        super({
            ...props,
            onOverlayCLick: () => {
                modalUtil.close();
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
