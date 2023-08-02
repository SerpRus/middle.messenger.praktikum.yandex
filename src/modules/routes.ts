import ChatPage from '../templates/chat-page';
import SignIn from '../templates/sign-in';
import SignUp from '../templates/sign-up';
import ErrorPage from '../templates/error-page';
import Profile from '../templates/profile';
import SiteMap from '../templates/site-map';

import TemplateType from '../types/template';

export default {
    '/': {
        page: ChatPage as unknown as TemplateType,
        props: {
            link: {
                text: 'Профиль',
                href: '/profile',
                thema: 'unobtrusive',
                icon: {
                    classes: 'icon--12',
                    name: 'icon-arrow-right',
                },
            },
            searchFiled: {
                classes: 'aside-panel__search',
                id: 'search',
                name: 'search',
                type: 'text',
                thema: 'filled',
                label: 'Поиск',
                icon: {
                    classes: 'icon--20',
                    name: 'icon-loupe',
                },
            },
            chats: [{
                name: 'Андрей',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                lastMessage: 'Изображение',
                date: '10:49',
                notifications: '2',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
                notifications: '99',
            }, {
                name: 'Вадим',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Круто!',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            },],
        },
    },
    '/selected-chat': {
        page: ChatPage as unknown as TemplateType,
        props: {
            isChatSelected: true,
            chat: {
                user: {
                    name: 'Вадим',
                    imgSrc: '/images/users/user-plug.jpg',
                    imgAlt: 'user',
                },
                headerDropdownOptions: [{
                    button: {
                        classes: 'chat-page__chat-header-dropdown-list-button button--transparent',
                        inlineContent: true,
                        text: 'test button',
                    },
                    icon: {
                        classes: 'chat-page__chat-header-dropdown-list-icon icon--22',
                        name: 'cross-in-circle',
                    },
                    text: 'Добавить пользователя'
                }, {
                    button: {
                        classes: 'chat-page__chat-header-dropdown-list-button button--transparent',
                        inlineContent: true,
                        text: 'test button',
                    },
                    icon: {
                        classes: 'chat-page__chat-header-dropdown-list-icon icon--22 icon--rotate-45',
                        name: 'cross-in-circle',
                    },
                    text: 'Удалить пользователя'
                },],
            },
            link: {
                text: 'Профиль',
                href: '/profile',
                thema: 'unobtrusive',
                icon: {
                    classes: 'icon--12',
                    name: 'icon-arrow-right',
                },
            },
            searchFiled: {
                classes: 'aside-panel__search',
                id: 'search',
                name: 'search',
                type: 'text',
                thema: 'filled',
                label: 'Поиск',
                icon: {
                    classes: 'icon--20',
                    name: 'icon-loupe',
                },
            },
            chats: [{
                name: 'Андрей',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                lastMessage: 'Изображение',
                date: '10:49',
                notifications: '2',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
                notifications: '99',
            }, {
                name: 'Вадим',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Круто!',
                date: 'Пт',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            }, {
                name: 'Киноклуб',
                imgSrc: '/images/users/user-plug.jpg',
                imgAlt: 'user',
                isYourLastMessage: true,
                lastMessage: 'Друзья, у меня для вас особенный выпуск новостей! asdasdas sa d asd asd asd',
                date: '12:00',
            },],
        },
    },
    '/profile': {
        page: Profile as unknown as TemplateType,
        props: {
            link: {
                href: '/',
                text: 'Назад к чатам',
            },
        },
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
                text: 'Войти',
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
            form: {
                classes: 'form--big',
            },
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
                    name: 'password_repeat',
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
    '/site-map': {
        page: SiteMap as unknown as TemplateType,
        props: {
            links: [{
                href: '/sign-in',
                text: 'Вход',
            }, {
                href: '/sign-up',
                text: 'Регистрация',
            }, {
                href: '/',
                text: 'Чаты',
            }, {
                href: '/selected-chat',
                text: 'Чаты с выбранным чатом',
            }, {
                href: '/profile',
                text: 'Настройки пользователя',
            }, {
                href: '/test404',
                text: '404 страницы',
            }, {
                href: '/test500',
                text: '5** страница',
            },],
        },
    },
};
