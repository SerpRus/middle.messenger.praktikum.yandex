import BaseAPI from './base-api';

export interface ProfileData {
    first_name: string;
    second_name: string;
    display_name: string,
    login: string;
    email: string;
    phone: string;
}

export interface AvatarResponse {
    avatar: string,
}

export interface SearchData {
    login: string,
}

export interface UsersResponse {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    phone: string,
    login: string,
    avatar: string,
    email: string,
}

export class UserApi extends BaseAPI {
    constructor() {
        super('/user');
    }

    profile(data: ProfileData) {
        return this.http.put('/profile', data);
    }

    avatar(formData: FormData): Promise<AvatarResponse> {
        return this.http.put('/profile/avatar', formData);
    }

    search(data: SearchData): Promise<UsersResponse> {
        return this.http.post('/search', data);
    }

    read = undefined;

    create = undefined;

    update = undefined;

    delete = undefined;
}

export default new UserApi();
