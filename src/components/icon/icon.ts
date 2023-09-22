import Block from '../../utils/block';
import template from './icon.hbs';

interface IconProps {
    classes?: string,
}

export default class Icon extends Block<IconProps> {
    static componentName = 'Icon';

    constructor(props: IconProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
