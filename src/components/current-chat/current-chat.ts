import Block from '../../utils/block';
import template from './current-chat.hbs';
import { withStore } from '../../utils/store';
import MessagesController from '../../controllers/messages-controller';

interface CurrentChatProps {
    selectedChat?: number,
    chatName: string,
    chatAvatar: string,
    chat: Record<string, any>,
    addUserPopup: Record<string, any>,
    onSendMessage: (e: Event) => void,
    onFocusinMessage: () => void,
    onFocusoutMessage: () => void,
}

type MessageType = {
    chat_id: number,
    content: string,
    file: null | File,
    id: number,
    is_read: boolean,
    time: string,
    type: string,
    user_id: number,
};

export class CurrentChatBase extends Block<CurrentChatProps> {
    static componentName = 'CurrentChat';

    constructor(props: CurrentChatProps) {
        super({
            ...props,
            chatName: 'Вадим',
            chatAvatar: '/images/users/user-plug.jpg',
            chat: {
                dropdownActionsList: [{
                    action: {
                        classes: 'dropdown-content__item-action',
                        text: 'Добавить пользователя',
                        modalId: 'addUser',
                    },
                    icon: {
                        name: 'cross-in-circle',
                    },
                }, {
                    action: {
                        classes: 'dropdown-content__item-action',
                        text: 'Удалить пользователя',
                        modalId: 'deleteUser',
                    },
                    icon: {
                        rotate: '45',
                        name: 'cross-in-circle',
                        theme: 'highlighted',
                    },
                }],
                footerDropdownActionsList: [{
                    action: {
                        text: 'Фото или Видео',
                    },
                    icon: {
                        name: 'preview',
                    },
                }, {
                    action: {
                        text: 'Файл',
                    },
                    icon: {
                        name: 'figure',
                    },
                }, {
                    action: {
                        text: 'Локация',
                    },
                    icon: {
                        name: 'circle',
                    },
                }],
            },
            onSendMessage: (e: Event) => {
                e.preventDefault();

                const { selectedChat: id } = this.props;
                const { value: message } = this.refs.message.refs.input.getElement();

                if (!message) {
                    return;
                }

                MessagesController.sendMessage(id as number, message);
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}

const withSelectedChatMessages = withStore(state => {
    if (!state || !state.selectedChat || !state.user) {
        return;
    }

    const selectedChatId = state.selectedChat?.id;
    const userId = state.user.id;

    if (!selectedChatId) {
        return {
            messages: [],
            selectedChat: undefined,
            userId,
        };
    }

    let messages = (
        (state.messages)
            ? state.messages
            : {}
    )[selectedChatId];

    if (messages && messages.length) {
        messages = messages.map((message: MessageType) => {
            return {
                ...message,
                isMine: message.user_id === userId,
            };
        });
    }

    return {
        chatName: state.selectedChat?.title,
        messages: messages || [],
        selectedChat: selectedChatId,
        userId: state.user.id
    };
});

const CurrentChat = withSelectedChatMessages(CurrentChatBase);

export default CurrentChat;
