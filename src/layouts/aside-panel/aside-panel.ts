import Block from '../../utils/block';
import template from './aside-panel.hbs';

interface AsidePanelProps {
    classes?: string,
}

export default class AsidePanel extends Block<AsidePanelProps> {
    static componentName = 'AsidePanel';

    constructor(props: AsidePanelProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
