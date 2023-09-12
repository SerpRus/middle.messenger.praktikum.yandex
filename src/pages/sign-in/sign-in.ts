import Block from '../../utils/block';
import template from './sign-in.hbs';
import { SigninData } from '../../api/auth-api';
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

export default class SignIn extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super({
            ...props,
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

                const data: SigninData = Object.fromEntries(values);

                try {
                    await AuthController.signin(data);
                } catch (e) {
                    if (e instanceof Error) {
                        this.refs.form.validate.displayRequestError(e.message);
                    }
                }
            },
            onFocusout: (e: Event) => {
                const target = e.target as EventTarget;

                if (this.props.eventBus) {
                    this.props.eventBus.emit('field-validate', target);
                }
            },
            eventBus: new EventBus(),
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
