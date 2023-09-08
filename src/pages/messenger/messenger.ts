import Block from '../../utils/block';
import template from './messenger.hbs';

interface MessengerProps {
    isChatSelected?: boolean,
    chat: Record<string, any>,
    chats: {
        userName: string,
        userImgSrc: string,
        userImgAlt: string,
        userLastMessage: string,
        date: string,
        notifications?: string,
        isYourLastMessage?: boolean,
        selected?: boolean,
    }[]
}

export default class Messenger extends Block<MessengerProps> {
    constructor(props: MessengerProps) {
        super({
            ...props,
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
        }, template);
    }
}
