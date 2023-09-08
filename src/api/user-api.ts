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

    read = undefined;
    create = undefined;
    update = undefined;
    delete = undefined;
}

export default new UserApi();
