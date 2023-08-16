import Action from '../../components/action';

export default [
    {
        key: 'links',
        ClassName: Action,
        props: [
            {
                href: '/sign-in',
                text: 'Вход',
            }, {
                href: '/sign-up',
                text: 'Регистрация',
            }, {
                href: '/chats',
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
            },
        ]
    }
];
