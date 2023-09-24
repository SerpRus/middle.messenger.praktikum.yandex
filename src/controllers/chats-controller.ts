import API, { UsersData, CreateChat, DeleteChat, ChatsAPI, UserType } from '../api/chats-api';
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

                await MessagesController.connect(chat.id, token as string);
            });

            store.set('chats', chats);
        } catch (e: any) {
            console.error(e.reason)
        }
    }

    async createChat(data: CreateChat) {
        try {
            await this.api.create(data);
        } catch (e: any) {
            console.error(e.reason)
        }
    }

    async deleteChat(data: DeleteChat) {
        try {
            await this.api.deleteChat(data);
        } catch (e: any) {
            console.error(e.reason)
        }
    }

    getToken(id: number): Promise<string> | void {
        try {
            return this.api.getToken(id);
        } catch (e: any) {
            console.error(e.reason);
        }
    }

    async addUsers(data: UsersData) {
        try {
            await this.api.addUsers(data);

            await this.getUsers(data.chatId);

            ModalUtil.close();
        } catch (e: any) {
            console.error(e.reason)
        }
    }

    selectChat(chat: ChatType) {
        store.set('selectedChat', chat);
    }

    async getUsers(id: number) {
        try {
            let users: UserType[] = await this.api.getUsers(id);

            users = users.filter((user: any) => user.id !== store.getState().user.id);

            store.set('chatUsers', users);
        } catch (e: any) {
            console.error(e.reason)
        }
    }

    async deleteUsers(data: UsersData) {
        try {
            await this.api.deleteUsers(data);

            await this.getUsers(data.chatId);

            ModalUtil.close();
        } catch (e: any) {
            console.error(e.reason);
        }
    }
}

export default new ChatsController();
