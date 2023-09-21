import API, { AddUserData, CreateChat, DeleteChat, ChatsAPI } from '../api/chats-api';
import store from '../utils/store';
import { StringIndexed } from '../utils/helpers/queryStringify';
import MessagesController from './messages-controller';
import ModalUtil from '../utils/modal-util';

type ChatType = {
    avatar: null | string,
    created_by: number,
    id: number,
    last_message: Record<string, any>,
    title: string,
    unread_count: number,
}

export class ChatsController {
    private readonly api: ChatsAPI;

    constructor() {
        this.api = API;
    }

    async fetchChats(data?: StringIndexed) {
        try {
            const chats = await this.api.fetchChats(data);

            chats.map(async (chat) => {
                const token = await this.getToken(chat.id);

                await MessagesController.connect(chat.id, token);
            });

            store.set('chats', chats);
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    async createChat(data: CreateChat) {
        try {
            await this.api.create(data);
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    async deleteChat(data: DeleteChat) {
        try {
            await this.api.deleteChat(data);
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    getToken(id: number) {
        try {
            return this.api.getToken(id);
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    async addUsers (data: AddUserData) {
        try {
            await this.api.addUsers(data);

            ModalUtil.close();
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    selectChat(chat: ChatType) {
        store.set('selectedChat', chat);
    }
}

export default new ChatsController();
