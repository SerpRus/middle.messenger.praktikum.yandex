import Formfield from '../../components/formfield';
import Action from '../../components/action';

export default [
    {
        key: 'formfields',
        ClassName: Formfield,
        props: [
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
                text: 'Зарегистрироваться',
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
                href: '/sign-in',
                text: 'Войти',
            }
        ]
    }
];
