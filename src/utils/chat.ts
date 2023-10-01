import '../scss/style.scss';

import AuthController from '../controllers/auth-controller';
import Router from './router';

import Block from './block';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import Messenger from '../pages/messenger';
import Settings from '../pages/settings';
import ChangeUserInfo from '../pages/change-user-info';
import ChangePassword from '../pages/change-password';

import components from './components';
import registerComponent from './register-component';

enum Routes {
    index = '/',
    register = '/register',
    messenger = '/messenger',
    settings = '/settings',
    changeUserInfo = '/change-user-info',
    changePassword = '/change-password',
}

export default class Chat {
    $root: HTMLElement;

    constructor($app: HTMLElement) {
        components.forEach((component) => registerComponent(component as typeof Block));

        this.$root = $app;

        this.init();
    }

    init = async () => {
        Router
            .use(Routes.index, SignIn)
            .use(Routes.register, SignUp)
            .use(Routes.messenger, Messenger)
            .use(Routes.settings, Settings)
            .use(Routes.changeUserInfo, ChangeUserInfo)
            .use(Routes.changePassword, ChangePassword);

        const { pathname } = window.location;
        let isProtectedRoute = true;

        switch (pathname) {
            case Routes.index:
            case Routes.register:
                isProtectedRoute = false;
                break;
        }

        try {
            await AuthController.fetchUser();

            Router.start();

            if (!isProtectedRoute) {
                Router.go(Routes.messenger);
            }
        } catch (e) {
            Router.start();

            if (isProtectedRoute) {
                Router.go(Routes.index);
            }
        }
    };
}
