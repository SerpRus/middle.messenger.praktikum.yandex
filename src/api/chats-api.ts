import BaseAPI from './base-api';
import { StringIndexed } from '../utils/helpers/queryStringify';

export interface Chats {
    id: number,
    title: string,
    avatar: string,
    unread_count: number,
    created_by: number,
    last_message: {
        user: {
            first_name: string,
            second_name: string,
            avatar: string,
            email: string,
            login: string,
            phone: string,
        },
        time: string,
        content: string,
    },
}

export interface CreateChat {
    title: string,
}

export interface DeleteChat {
    chatId: number,
}

export interface DeletedChat {
    userId: number,
    result: {
        id: number,
        title: string,
        avatar: string,
        created_by: string
    }
}

export class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    fetchChats(data?: StringIndexed): Promise<Chats[]> {
        return this.http.get('', data);
    }

    create(data: CreateChat) {
        return this.http.post('', data);
    }

    deleteChat(data: DeleteChat): Promise<DeletedChat> {
        return this.http.delete('', data);
    }

    async getToken(id: number): Promise<string> {
        const response = await this.http.post<{ token: string }>(`/token/${id}`);

        return response.token;
    }

    read = undefined;
    update = undefined;
    delete = undefined;
}

export default new ChatsAPI();
