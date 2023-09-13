import Block from '../../utils/block';
import template from './messenger.hbs';
import ChatsController from '../../controllers/chats-controller';
import { CreateChat, DeleteChat } from '../../api/chats-api';
import { withStore } from '../../utils/store';
import eventBus from '../../utils/event-bus';
import dropdown from '../../utils/dropdown';
import { ChatData } from '../../components/chat-item/chat-item';
import { StringIndexed } from '../../utils/helpers/queryStringify';

interface MessengerProps {
    isChatSelected?: boolean,
    chat: Record<string, any>,
    chats: {
        userName: string,
        userImgSrc: string,
        userImgAlt: string,
        userLastMessage: string,
        date: string,
        notifications?: string,
        isYourLastMessage?: boolean,
        selected?: boolean,
    }[],
    createChatPopup: {
        id: string,
        classes?: string,
        title: string,
        img: {
            src: string,
        },
        field: {
            id: string,
            name: string,
            type: string,
            label: string,
            ref: string,
        },
        action: {
            themaType: string,
            thema: string,
            text: string,
            onClick?: () => void,
        }
        ref: string,
    },
    search: {
        value: string,
        onSearch: (e: Event) => void,
    },
}

export class MessengerBase extends Block<MessengerProps> {
    static activeChatIdToDelete: number | null;

    constructor(props: MessengerProps) {
        super({
            ...props,
            // isChatSelected: true,
            chat: {
                user: {
                    name: 'Вадим',
                    imgSrc: '/images/users/user-plug.jpg',
                    imgAlt: 'user',
                },
                deleChatActionsList: [{
                    action: {
                        text: 'Удалить чат',
                        onClick: async () => {
                            const deleteChatData: DeleteChat = {
                                chatId: MessengerBase.activeChatIdToDelete as number,
                            };

                            await ChatsController.deleteChat(deleteChatData);

                            await ChatsController.fetchChats();
                        }
                    },
                    icon: {
                        name: 'delete',
                    },
                }],
                dropdownActionsList: [{
                    action: {
                        text: 'Добавить пользователя',
                    },
                    icon: {
                        name: 'cross-in-circle',
                    },
                }, {
                    action: {
                        text: 'Удалить пользователя',
                    },
                    icon: {
                        rotate: '45',
                        name: 'cross-in-circle',
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

        });

        eventBus.on('openContextMenu', this._openContextMenu);
    }

    render() {
        return this.compile(template, this.props);
    }

    private _openContextMenu = (chatData: ChatData) => {
        const contextMenu = this.refs.deleteChat.getElement();

        const { target, chatId } = chatData;

        MessengerBase.activeChatIdToDelete = chatId;

        dropdown.open(target, contextMenu);
    }

    async init() {
        await ChatsController.fetchChats();
    }
}

const withUser = withStore((state) => ({ chats: state.chats }));
const Messenger = withUser(MessengerBase);
export default Messenger;
