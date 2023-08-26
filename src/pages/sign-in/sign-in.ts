import Block from '../../utils/block';
import template from './sign-in.hbs';

import EventBus from '../../utils/event-bus';

interface SignInProps {
    fields:  {
        classes: string,
        id: string,
        name: string,
        type: string,
        label: string,
    }[],
    onSubmit?: (e: Event) => void,
    onFocusout?: (e: Event) => void,
    eventBus?: EventBus,
}

export default class SignIn extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super({
            ...props,
            onSubmit: (e: Event) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const formDataKeys = formData.keys();
                for (const key of formDataKeys) {
                    console.log(`${key}: '${formData.get(key)}'`);
                }

                if (this.props.eventBus) {
                    this.props.eventBus.emit('form-validate');
                }
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
