import Block from '../../utils/block';
import template from './chats.hbs';
import ChatsController from '../../controllers/chats-controller';
import { StringIndexed } from '../../utils/helpers/queryStringify';
import store, { withStore } from '../../utils/store';
import { CreateChat, DeleteChat } from '../../api/chats-api';
import { ChatData } from '../chat-item/chat-item';
import dropdown from '../../utils/dropdown';
import eventBus from '../../utils/event-bus';

interface ChatsProps {
    search: {
        value: string,
        onSearch: (e: Event) => void,
    },
    deleChatActionsList: [{
        action: {
            text: string,
            onClick: () => void,

        },
        icon: {
            name: 'delete',
        },
    }],
    createChatPopup: Record<string, any>,
}

export class ChatsBase extends Block<ChatsProps> {
    static componentName = 'Chats';

    static activeChatIdToDelete: number | null;

    constructor(props: ChatsProps) {
        super({
            ...props,
            search: {
                value: '',
                onSearch: async (e: Event) => {
                    const { value } = e.target as HTMLInputElement;

                    const searchChatsData: StringIndexed = {
                        title: value,
                    }

                    this.props.search.value = value;

                    await ChatsController.fetchChats(searchChatsData);

                    const input = this.refs.search.refs.input.getElement();
                    input.focus()
                    input.selectionStart = input.selectionEnd = input.value.length;
                },
            },
            createChatPopup: {
                id: 'createChat',
                title: 'Создать чат',
                img: {
                    src: 'images/users/user-plug.jpg',
                },
                field: {
                    id: 'chatName',
                    name: 'chatName',
                    type: 'text',
                    label: 'Название чата',
                    ref: 'newChatName'
                },
                action: {
                    themaType: 'button',
                    thema: 'button-brand',
                    text: 'Создать',
                    onClick: async () => {
                        const {value: newChatName} = this.refs.createChatPopup.refs.newChatName.refs.input.getElement();

                        const data: CreateChat = {
                            title: newChatName,
                        }

                        await ChatsController.createChat(data);

                        await ChatsController.fetchChats();
                    }
                },

                ref: 'createChatPopup',
            },
            deleChatActionsList: [{
                action: {
                    text: 'Удалить чат',
                    onClick: async () => {
                        const deleteChatData: DeleteChat = {
                            chatId: ChatsBase.activeChatIdToDelete as number,
                        };

                        await ChatsController.deleteChat(deleteChatData);

                        await ChatsController.fetchChats();
                    }
                },
                icon: {
                    name: 'delete',
                },
            }],
        });

        eventBus.on('openContextMenu', this._openContextMenu);
    }

    render() {
        return this.compile(template, this.props);
    }

    async init() {
        await ChatsController.fetchChats();
    }

    private _openContextMenu = (chatData: ChatData) => {
        const contextMenu = this.refs.deleteChat.getElement();

        const { target, chatId } = chatData;

        ChatsBase.activeChatIdToDelete = chatId;

        dropdown.openByTarget(target, contextMenu);
    }
}

const withUser = withStore((state) => {
    if (!state.chats) {
        return;
    }

    return {
        chats: state.chats.map((chat) => {
            return {
                ...chat,
                onClick: () => {
                    ChatsController.selectChat(chat);
                },
                selected: chat.id === store.getState().selectedChat,
            };
        })
    }
});
const Chats = withUser(ChatsBase);
export default Chats;
