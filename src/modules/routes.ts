import chatPage from '../templates/chat-page/chat-page.hbs';
import signIn from '../templates/sign-in/sign-in.hbs';
import signUp from '../templates/sign-up/sign-up.hbs';
import errorPage from '../templates/error-page/error-page.hbs';
import profile from '../templates/profile/profile.hbs';
import modals from '../templates/modals/modals.hbs';
import siteMap from '../templates/site-map/site-map.hbs';

export default {
    '/': {
        page: chatPage,
        props: {
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
        page: chatPage,
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
                },],
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
                },],
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
                selected: true,
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
        page: profile,
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
                }
            ],
            footerActions: [
                {
                    text: 'Изменить данные',
                    themaType: 'link',
                    thema: 'link-medium'
                }, {
                    text: 'Изменить пароль',
                    themaType: 'link',
                    thema: 'link-medium'
                }, {
                    text: 'Выйти',
                    themaType: 'link',
                    thema: 'link-medium-highlighted'
                },
            ],
        },
    },
    '/profile-change-info': {
        page: profile,
        props: {
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
                }
            ],
            footerActions: [
                {
                    text: 'Сохранить',
                    themaType: 'button',
                    thema: 'button-brand'
                },
            ],
        },
    },
    '/profile-change-password': {
        page: profile,
        props: {
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
                    thema: 'button-brand'
                },
            ],
        },
    },
    '/sign-in': {
        page: signIn,
        props: {
            form: {
                attributes: [{
                    key: 'data-authorization',
                },],
            },
            formfields: [
                {
                    classes: 'form__fileds-item has-error',
                    id: 'login',
                    name: 'login',
                    type: 'text',
                    label: 'Логин',
                    error: 'Неверный логин',
                }, {
                    classes: 'form__fileds-item',
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                },
            ],
            button: {
                text: 'Войти',
                attributes: [{
                    key: 'data-authorization-button',
                },],
            },
            link: {
                text: 'Нет аккаунта?',
                href: '/sign-up',
            },
        },
    },
    '/sign-up': {
        page: signUp,
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
                    classes: 'form__fileds-item has-error password-mismatch-error',
                    id: 'password',
                    name: 'password',
                    type: 'password',
                    label: 'Пароль',
                }, {
                    classes: 'form__fileds-item has-error password-mismatch-error',
                    id: 'password_repeat',
                    name: 'password_repeat',
                    type: 'password',
                    label: 'Пароль',
                    error: 'Пароли не совпадают',
                },
            ],
            button: {
                text: 'Зарегистрироваться',
            },
            link: {
                text: 'Войти',
                href: '/sign-in',
            },
        },
    },
    '/test500': {
        page: errorPage,
        props: {
            code: '500',
            description: 'Мы уже фиксим',
        },
    },
    '/modals': {
        page: modals,
    },
    '/modal-open': {
        page: profile,
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
                }
            ],
            footerActions: [
                {
                    text: 'Сохранить',
                    themaType: 'button',
                    thema: 'button-brand'
                },
            ],
        }
    },
    '/site-map': {
        page: siteMap,
        props: {
            links: [{
                href: '/sign-in',
                text: 'Вход',
            }, {
                href: '/sign-up',
                text: 'Регистрация',
            }, {
                href: '/',
                text: 'Список чатов и лента переписки',
            }, {
                href: '/selected-chat',
                text: 'Список чатов и лента переписки (с выбранным чатом)',
            }, {
                href: '/profile',
                text: 'Настройки пользователя',
            }, {
                href: '/profile-change-info',
                text: 'Настройки пользователя: изменение данных',
            }, {
                href: '/profile-change-password',
                text: 'Настройки пользователя: изменение пароля',
            }, {
                href: '/test404',
                text: '404 страницы',
            }, {
                href: '/test500',
                text: '5** страница',
            }, {
                href: '/modals',
                text: 'Страница с модальными окнами',
            }, {
                href: '/modal-open',
                text: 'Страница с открытым модальным окном',
            },],
        },
    },
};
