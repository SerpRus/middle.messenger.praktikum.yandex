import API, { UserApi, ProfileData, UsersResponse, SearchData } from '../api/user-api';
import AuthController from '../controllers/auth-controller';
import router from '../utils/router';
import store from '../utils/store';

export class UserController {
    private readonly api: UserApi;

    constructor() {
        this.api = API;
    }

    async profile(data: ProfileData) {
        try {
            await this.api.profile(data);

            await AuthController.fetchUser();

            router.go('/settings');
        } catch (e: any) {
            console.error(e.reason);
        }
    }

    async avatar(formData: FormData): Promise<string | void> {
        try {
            const user = await this.api.avatar(formData);

            store.set('user', user);

            const { avatar } = user;

            return avatar;
        } catch (e: any) {
            console.error(e.reason);
        }
    }

    async search(data: SearchData): Promise<UsersResponse | void> {
        try {
            return await this.api.search(data);
        } catch (e: any) {
            console.error(e.reason);
        }
    }
}

export default new UserController();
