import API, { ChatsAPI } from '../api/chats-api';
import store from '../utils/store';
import { StringIndexed } from '../utils/helpers/queryStringify';
import { CreateChat, DeleteChat } from '../api/chats-api';

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async fetchChats(data?: StringIndexed) {
        const chats = await this.api.fetchChats(data);

        store.set('chats', chats);
    }

    async createChat(data: CreateChat) {
        await this.api.create(data);
    }

    async deleteChat(data: DeleteChat) {
        await this.api.deleteChat(data);
    }
}

export default new ChatsController();
