import Block from '../../utils/block';
import template from './icon.hbs';

interface IconProps {
    classes?: string,
}

export default class Icon extends Block<IconProps> {
    static className = 'Icon';

    constructor(props: IconProps) {
        super({
            ...props,
        }, template);
    }
}
