import Block from '../../utils/block';
import template from './avatar.hbs';
import EventBus from '../../utils/event-bus';

interface AvatarProps {
    classes?: string,
    avatarSrc?: string,
    eventBus?: EventBus,
}

export default class Avatar extends Block<AvatarProps> {
    static className = 'Avatar';

    constructor(props: AvatarProps) {
        super({
            ...props,
        }, template);

        if (this.props.eventBus) {
            this.props.eventBus.on('change-user-avatar-img', (avatarSrc: string) => {
                this.setProps({
                    ...this.props,
                    avatarSrc,
                });
            });
        }
    }
}
