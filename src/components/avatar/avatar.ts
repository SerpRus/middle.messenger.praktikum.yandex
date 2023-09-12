import Block from '../../utils/block';
import template from './avatar.hbs';
import EventBus from '../../utils/event-bus';

interface AvatarProps {
    classes?: string,
    newAvatarSrc?: string,
    eventBus?: EventBus,
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
