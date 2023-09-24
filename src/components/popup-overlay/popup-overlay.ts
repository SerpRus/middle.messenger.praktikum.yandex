import Block from '../../utils/block';
import template from './popup-overlay.hbs';

interface PopupOverlayProps {
    events?: {
        click: () => void,
    }
    onClick: () => void,
}

export default class PopupOverlay extends Block<PopupOverlayProps> {
    static componentName = 'PopupOverlay';

    constructor(props: PopupOverlayProps) {
        super({
            ...props,
            events: {
                click: props.onClick,
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
