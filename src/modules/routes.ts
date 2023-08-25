// import chatPage from '../templates/chat-page/chat-page.hbs';
// import signIn from '../templates/sign-in/sign-in.hbs';
// import signUp from '../templates/sign-up/sign-up.hbs';
// import errorPage from '../templates/error-page/error-page.hbs';
// import profile from '../templates/profile/profile.hbs';
// import modals from '../templates/modals/modals.hbs';
// import siteMap from '../templates/site-map/site-map.hbs';

import ErrorPage from '../pages/error-page';
import SiteMap from '../pages/site-map';
import SignIn from '../pages/sign-in';
import SignUp from '../pages/sign-up';
import ChatPage from '../pages/chat-page';
import Profile from '../pages/profile';
import Modals from '../pages/modals';

export default {
    '/chats': {
        page: ChatPage,
        props: {
            chats: [{
                userName: 'Андрей',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                userLastMessage: 'Изображение',
                date: '10:49',
                notifications: '2',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
                notifications: '99',
            }, {
                userName: 'Вадим',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: 'Круто!',
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }],
        },
    },
    '/selected-chat': {
        page: ChatPage,
        props: {
            isChatSelected: true,
            chat: {
                user: {
                    name: 'Вадим',
                    imgSrc: '/images/users/user-plug.jpg',
                    imgAlt: 'user',
                },
                dropdownActionsList: [{
                    action: {
                        text: 'Добавить пользователя',
                    },
                    icon: {
                        name: 'cross-in-circle',
                    },
                }, {
                    action: {
                        text: 'Удалить пользователя',
                    },
                    icon: {
                        rotate: '45',
                        name: 'cross-in-circle',
                    },
                }],
                footerDropdownActionsList: [{
                    action: {
                        text: 'Фото или Видео',
                    },
                    icon: {
                        name: 'preview',
                    },
                }, {
                    action: {
                        text: 'Файл',
                    },
                    icon: {
                        name: 'figure',
                    },
                }, {
                    action: {
                        text: 'Локация',
                    },
                    icon: {
                        name: 'circle',
                    },
                }],
            },
            chats: [{
                userName: 'Андрей',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                userLastMessage: 'Изображение',
                date: '10:49',
                notifications: '2',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
                notifications: '99',
            }, {
                userName: 'Вадим',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: 'Круто!',
                date: '12:00',
                selected: true,
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }, {
                userName: 'Киноклуб',
                userImgSrc: '/images/users/user-plug.jpg',
                userImgAlt: 'user',
                isYourLastMessage: true,
                userLastMessage: `Друзья, у меня для вас особенный выпуск новостей!
                    asdasdas sa d asd asd asd`,
                date: '12:00',
            }],
        },
    },
    '/profile': {
        page: Profile,
        props: {
            username: 'Иван',
            formfields: [
                {
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    label: 'Почта',
                    value: 'pochta@yandex.ru',
                    disabled: true,
                }, {
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                    value: 'ivanivanov',
                    disabled: true,
                }, {
                    id: 'first_name',
                    name: 'first_name',
                    type: 'text',
                    label: 'Имя',
                    value: 'Иван',
                    disabled: true,
                }, {
                    id: 'second_name',
                    name: 'second_name',
                    type: 'text',
                    label: 'Фамилия',
                    value: 'Иван',
                    disabled: true,
                }, {
                    id: 'display_name',
                    name: 'display_name',
                    type: 'text',
                    label: 'Имя в чате',
                    value: 'Иванов',
                    disabled: true,
                }, {
                    id: 'phone',
                    name: 'phone',
                    type: 'tel',
                    label: 'Телефон',
                    value: '+79099673030',
                    disabled: true,
                },
            ],
            footerActions: [
                {
                    text: 'Изменить данные',
                    themaType: 'link',
                    thema: 'link-medium',
                    href: '/profile-change-info',
                }, {
                    text: 'Изменить пароль',
                    themaType: 'link',
                    thema: 'link-medium',
                    href: '/profile-change-password',
                }, {
                    text: 'Выйти',
                    themaType: 'link',
                    thema: 'link-medium-highlighted',
                    type: 'submit',
                },
            ],
        },
    },
    '/profile-change-info': {
        page: Profile,
        props: {
            isValidate: true,
            footerActionsClasses: 'profile__footer-actions--change-info',
            username: 'Иван',
            formfields: [
                {
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    label: 'Почта',
                    value: 'pochta@yandex.ru',
                }, {
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                    value: 'ivanivanov',
                }, {
                    id: 'first_name',
                    name: 'first_name',
                    type: 'text',
                    label: 'Имя',
                    value: 'Иван',
                }, {
                    id: 'second_name',
                    name: 'second_name',
                    type: 'text',
                    label: 'Фамилия',
                    value: 'Иван',
                }, {
                    id: 'display_name',
                    name: 'display_name',
                    type: 'text',
                    label: 'Имя в чате',
                    value: 'Иванов',
                }, {
                    id: 'phone',
                    name: 'phone',
                    type: 'tel',
                    label: 'Телефон',
                    value: '+79099673030',
                },
            ],
            footerActions: [
                {
                    text: 'Сохранить',
                    themaType: 'button',
                    thema: 'button-brand',
                    type: 'submit',
                    ref: 'changeInfoSumbit',
                },
            ],
        },
    },
    '/profile-change-password': {
        page: Profile,
        props: {
            isValidate: true,
            footerActionsClasses: 'profile__footer-actions--change-info',
            username: 'Иван',
            formfields: [
                {
                    id: 'oldPassword',
                    name: 'oldPassword',
                    type: 'password',
                    label: 'Старый пароль',
                    value: 'password',
                }, {
                    id: 'newPassword',
                    name: 'newPassword',
                    type: 'password',
                    label: 'Новый пароль',
                    value: 'testpassword',
                }, {
                    id: 'newPasswordReepeat',
                    name: 'newPasswordReepeat',
                    type: 'password',
                    label: 'Повторите новый пароль',
                    value: 'testpassword',
                },
            ],
            footerActions: [
                {
                    text: 'Сохранить',
                    themaType: 'button',
                    thema: 'button-brand',
                    type: 'submit',
                    ref: 'password-change-submit'
                },
            ],
        },
    },
    '/sign-in': {
        page: SignIn,
        props: {
            isValidate: true,
            fields: [
                {
                    classes: 'form__fileds-item',
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                }, {
                    classes: 'form__fileds-item',
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                },
            ],
        },
    },
    '/sign-up': {
        page: SignUp,
        props: {
            isValidate: true,
            fields: [
                {
                    classes: 'form__fileds-item',
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    label: 'Почта',
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
        },
    },
    '/test500': {
        page: ErrorPage,
        props: {
            code: '500',
            description: 'Мы уже фиксим',
        },
    },
    '/modals': {
        page: Modals,
    },
    '/modal-open': {
        page: Profile,
        props: {
            modalOpen: true,
            footerActionsClasses: 'profile__footer-actions--change-info',
            username: 'Иван',
            formfields: [
                {
                    id: 'email',
                    name: 'email',
                    type: 'email',
                    label: 'Почта',
                    value: 'pochta@yandex.ru',
                }, {
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                    value: 'ivanivanov',
                }, {
                    id: 'first_name',
                    name: 'first_name',
                    type: 'text',
                    label: 'Имя',
                    value: 'Иван',
                }, {
                    id: 'second_name',
                    name: 'second_name',
                    type: 'text',
                    label: 'Фамилия',
                    value: 'Иван',
                }, {
                    id: 'display_name',
                    name: 'display_name',
                    type: 'text',
                    label: 'Имя в чате',
                    value: 'Иванов',
                }, {
                    id: 'phone',
                    name: 'phone',
                    type: 'tel',
                    label: 'Телефон',
                    value: '+79099673030',
                },
            ],
            footerActions: [
                {
                    text: 'Сохранить',
                    themaType: 'button',
                    thema: 'button-brand',
                },
            ],
        },
    },
    '/': {
        page: SiteMap,
        props: {
            title: 'Карта сайта',
            links: [
                {
                    text: 'Вход',
                    href: '/sign-in',
                }, {
                    text: 'Регистрация',
                    href: '/sign-up',
                }, {
                    text: 'Список чатов и лента переписки',
                    href: '/chats',
                }, {
                    text: 'Список чатов и лента переписки (с выбранным чатом)',
                    href: '/selected-chat',
                }, {
                    text: 'Настройки пользователя',
                    href: '/profile',
                }, {
                    text: 'Настройки пользователя: изменение данных',
                    href: '/profile-change-info',
                }, {
                    text: 'Настройки пользователя: изменение пароля',
                    href: '/profile-change-password',
                }, {
                    text: '404 страница',
                    href: '/test404',
                }, {
                    text: '5** страница',
                    href: '/test500',
                }, {
                    text: 'Страница с модальными окнами',
                    href: '/modals',
                }, {
                    text: 'Страница с открытым модальным окном',
                    href: '/modal-open',
                },
            ],
        },
    },
};
