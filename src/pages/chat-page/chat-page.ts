import Block from '../../utils/block';
import template from './chat-page.hbs';

interface ChatPageProps {
    chats: {
        userName: string,
        userImgSrc: string,
        userImgAlt: string,
        userLastMessage: string,
        date: string,
        notifications?: string,
    }
}

export default class ChatPage extends Block<ChatPageProps> {
    constructor(props: ChatPageProps) {
        super({
            ...props,
        }, template);
    }
}
