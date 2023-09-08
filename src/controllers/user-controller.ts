import API, { UserApi, ProfileData } from '../api/user-api';
import AuthController from '../controllers/auth-controller';
import router from '../utils/router';

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
            // router.go('/messenger');
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    async avatar(formData: FormData): Promise<string> {
        try {
            const { avatar } = await this.api.avatar(formData);

            return avatar;
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }
}

export default new UserController();
