import Block from '../../utils/block';
import template from './chat-item.hbs';

interface ChatItemProps {
    classes?: string,
    selected?: boolean;
}

export default class ChatItem extends Block<ChatItemProps> {
    static componentName = 'ChatItem';

    constructor(props: ChatItemProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
