import Formfield from '../../components/formfield';
import Action from '../../components/action';

export default [
    {
        key: 'formfields',
        ClassName: Formfield,
        props: [
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
        ]
    },
    {
        key: 'action',
        ClassName: Action,
        props: [
            {
                classes: 'form__actions-item',
                themaType: 'button',
                thema: 'button-brand',
                text: 'Войти',
                type: 'button',
                attributes: [{
                    key: 'data-authorization-button',
                }],
            }
        ]
    },
    {
        key: 'link',
        ClassName: Action,
        props: [
            {
                thema: 'link',
                href: '/sign-up',
                text: 'Нет аккаунта?',
            }
        ]
    }
];
