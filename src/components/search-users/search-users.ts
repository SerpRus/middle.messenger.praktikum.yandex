import Block from '../../utils/block';
import template from './search-users.hbs';
import eventBus from '../../utils/event-bus';
import store from '../../utils/store';
import { UsersData } from '../../api/chats-api';
import ChatController from '../../controllers/chats-controller';

interface SearchUsersProps {
    fieldValue: string,
    users: Record<string, any>,
    userId?: number,
    eventBusName: string,
    onSearch: (e: Event) => void,
}

type ChatId = {
    userId: number,
}

export default class SearchUsers extends Block<SearchUsersProps> {
    static componentName = 'SearchUsers';

    constructor(props: SearchUsersProps) {
        super({
            ...props,
            eventBusName: 'addUserToChat',
            onSearch: async (e: Event) => {
                const { value } = e.target as HTMLInputElement;

                eventBus.emit('search-users', value);
            },
        });

        eventBus.on(this.props.eventBusName, this._addUserToChat);
    }

    render() {
        return this.compile(template, this.props);
    }

    private async _addUserToChat(data: ChatId) {
        const { userId } = data;

        const { id: selectedChatId } = store.getState().selectedChat;

        const addUserData: UsersData = {
            users: [
                userId
            ],
            chatId: selectedChatId,
        }

        await ChatController.addUsers(addUserData);
    }
}
