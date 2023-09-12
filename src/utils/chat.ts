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
    Index = '/',
    Register = '/register',
    Messenger = '/messenger',
    Test500 = '/test500',
    Settings = '/settings',
    ChangeUserInfo = '/change-user-info',
    ChangePassword = '/change-password',
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
            .use(Routes.Index, SignIn)
            .use(Routes.Register, SignUp)
            .use(Routes.Messenger, Messenger)
            .use(Routes.Settings, Settings)
            .use(Routes.ChangeUserInfo, ChangeUserInfo)
            .use(Routes.ChangePassword, ChangePassword)

        const { pathname } = window.location;
        let isProtectedRoute = true;

        switch (pathname) {
            case Routes.Index:
            case Routes.Register:
                isProtectedRoute = false;
                break;
        }

        try {
            await AuthController.fetchUser();

            Router.start();

            if (!isProtectedRoute) {
                Router.go(Routes.Messenger)
            }
        } catch (e) {
            Router.start();

            if (isProtectedRoute) {
                Router.go(Routes.Index);
            }
        }
    }
}
