import Block from '../../utils/block';
import template from './avatar.hbs';

interface AvatarProps {
    classes?: string,
    newAvatarSrc?: string,
}

export default class Avatar extends Block<AvatarProps> {
    static componentName = 'Avatar';

    constructor(props: AvatarProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
