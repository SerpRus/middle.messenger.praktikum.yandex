import Home from '../templates/home';
import SignIn from '../templates/sign-in';
import SignUp from '../templates/sign-up';
import ErrorPage from '../templates/error-page';

import TemplateType from '../types/template';

export default {
    '/': {
        page: Home as unknown as TemplateType,
    },
    '/sign-in': {
        page: SignIn as unknown as TemplateType,
        props: {
            form: {
                attributes: [{
                    key: 'data-authorization',
                },],
            },
            formfields: [
                {
                    classes: 'form__fileds-item',
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин'
                }, {
                    classes: 'form__fileds-item',
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                },
            ],
            button: {
                classes: 'form__actions-item',
                text: 'Авторизоваться',
                type: 'button',
                attributes: [{
                    key: 'data-authorization-button',
                },],
            },
            link: {
                classes: 'form__actions-item',
                text: 'Нет аккаунта?',
                href: '/sign-up',
            },
        },
    },
    '/sign-up': {
        page: SignUp as unknown as TemplateType,
        props: {
            formfields: [
                {
                    classes: 'form__fileds-item',
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    label: 'Почта'
                }, {
                    classes: 'form__fileds-item',
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                }, {
                    classes: 'form__fileds-item',
                    id: 'first_name',
                    name: 'first_name',
                    type: 'text',
                    label: 'Имя',
                }, {
                    classes: 'form__fileds-item',
                    id: 'second_name',
                    name: 'second_name',
                    type: 'text',
                    label: 'Фамилия',
                }, {
                    classes: 'form__fileds-item',
                    id: 'phone',
                    name: 'phone',
                    type: 'tel',
                    label: 'Телефон',
                }, {
                    classes: 'form__fileds-item',
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                }, {
                    classes: 'form__fileds-item',
                    id: 'password_repeat',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                },
            ],
            button: {
                classes: 'form__actions-item',
                text: 'Зарегистрироваться',
                type: 'button',
            },
            link: {
                classes: 'form__actions-item',
                text: 'Войти',
                href: '/sign-in',
            },
        },
    },
    '/test500': {
        page: ErrorPage as unknown as TemplateType,
        props: {
            code: '500',
            description: 'Мы уже фиксим',
            link: {
                href: '/',
                text: 'Назад к чатам',
            },
        },
    },
};
