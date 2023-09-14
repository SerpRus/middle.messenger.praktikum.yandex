import API, { ChatsAPI } from '../api/chats-api';
import store from '../utils/store';
import { StringIndexed } from '../utils/helpers/queryStringify';
import { CreateChat, DeleteChat } from '../api/chats-api';
import MessagesController from './messages-controller';

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async fetchChats(data?: StringIndexed) {
        const chats = await this.api.fetchChats(data);

        chats.map(async (chat) => {
            const token = await this.getToken(chat.id);

            await MessagesController.connect(chat.id, token);
        });

        store.set('chats', chats);
    }

    async createChat(data: CreateChat) {
        await this.api.create(data);
    }

    async deleteChat(data: DeleteChat) {
        await this.api.deleteChat(data);
    }

    getToken(id: number) {
        return this.api.getToken(id);
    }

    selectChat(id: number) {
        store.set('selectedChat', id);
    }
}

export default new ChatsController();
