import Block from '../../utils/block';
import template from './popup.hbs';

interface PopupProps {
    classes?: string,
}

export default class Popup extends Block<PopupProps> {
    static componentName = 'Popup';

    constructor(props: PopupProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
