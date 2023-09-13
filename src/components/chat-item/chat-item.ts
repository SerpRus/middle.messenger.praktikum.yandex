import Block from '../../utils/block';
import template from './chat-item.hbs';
import eventBus from '../../utils/event-bus';

interface ChatItemProps {
    classes?: string,
    selected?: boolean;
    events: {
        contextmenu: (e: Event) => void
    },
    chatId: number,
}

export type ChatData = {
    target: HTMLElement,
    chatId: number,
}

export default class ChatItem extends Block<ChatItemProps> {
    static componentName = 'ChatItem';

    constructor(props: ChatItemProps) {
        super({
            ...props,
            events: {
                contextmenu: (e: Event) => {
                    e.preventDefault();

                    eventBus.emit('openContextMenu', {
                        target: e.currentTarget,
                        chatId: this.props.chatId,
                    });
                }
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
