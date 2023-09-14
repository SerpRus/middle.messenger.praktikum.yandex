import API, { AuthAPI, SigninData, SignupData } from '../api/auth-api';
import store from '../utils/store';
import router from '../utils/router';
import MessagesController from './messages-controller';

export class AuthController {
    private readonly api: AuthAPI;

    constructor() {
        this.api = API;
    }

    async signin(data: SigninData) {
        try {
            await this.api.signin(data);

            await this.fetchUser();

            router.go('/messenger');
        } catch (e: any) {
            throw new Error(e.reason);
        }
    }

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);

            await this.fetchUser();

            router.go('/messenger');
        } catch (e: any) {
            console.error(e.message);
        }
    }

    async fetchUser() {
        const user = await this.api.read();

        store.set('user', user);
    }

    async logout() {
        try {
            MessagesController.closeAll();

            await this.api.logout();

            router.go('/');
        } catch (e: any) {
            console.error(e.message);
        }
    }
}

export default new AuthController();
