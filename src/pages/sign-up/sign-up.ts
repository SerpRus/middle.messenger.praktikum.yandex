import Block from '../../utils/block';
import template from './sign-up.hbs';
import { SignupData } from '../../api/auth-api';
import AuthController from '../../controllers/auth-controller';

import EventBus from '../../utils/event-bus';

interface SignInProps {
    fields:  {
        classes: string,
        id: string,
        name: string,
        type: string,
        label: string,
    }[],
    isValidate?: boolean,
    onSubmit?: (e: Event) => void,
    onFocusout?: (e: Event) => void,
    eventBus?: EventBus,
}

export default class SignUp extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super({
            ...props,
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
            onSubmit: async (e: Event) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement;
                const fields = form.querySelectorAll('input, textarea');
                const filedsArray: HTMLInputElement[] = Array.from(fields) as HTMLInputElement[];
                const values = filedsArray.map((field: HTMLInputElement) => {
                    const name = field.getAttribute('name');

                    return ([name, field.value]);
                });

                values.forEach((value) => {
                    console.log(`${value[0]}: '${value[1]}'`);
                })

                if (this.props.eventBus) {
                    this.props.eventBus.emit('form-validate');
                }

                if (!this.refs.form.validate.isValidForm) {
                    return;
                }

                const currentValues = values.filter((value) => {
                    return value[0] !== 'password_repeat';
                });

                const data: SignupData = Object.fromEntries(currentValues);

                await AuthController.signup(data);
            },
            onFocusout: (e: Event) => {
                const target = e.target as EventTarget;

                if (this.props.eventBus) {
                    this.props.eventBus.emit('field-validate', target);
                }
            },
            eventBus: new EventBus(),
        }, template);
    }
}
