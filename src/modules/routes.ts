import chatPage from '../templates/chat-page/chat-page.hbs';
import signIn from '../templates/sign-in/sign-in.hbs';
import signUp from '../templates/sign-up/sign-up.hbs';
import errorPage from '../templates/error-page/error-page.hbs';
import profile from '../templates/profile/profile.hbs';
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
        page: profile,
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
