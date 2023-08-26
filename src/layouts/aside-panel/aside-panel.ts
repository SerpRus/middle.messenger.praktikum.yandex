import Block from '../../utils/block';
import template from './aside-panel.hbs';

interface AsidePanelProps {
    classes?: string,
}

export default class AsidePanel extends Block<AsidePanelProps> {
    static className = 'AsidePanel';

    constructor(props: AsidePanelProps) {
        super({
            ...props,
        }, template);
    }
}
