import Block from '../../utils/block';
import template from './sign-in.hbs';
import { PropsType } from '../../types';

import EventBus from '../../utils/event-bus';

export default class SignIn extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
            submitOnClick: () => {
                const form = this.refs.form?.getElement() as HTMLFormElement;
                const formData = new FormData(form);
                const formDataKeys = formData.keys();
                for (const key of formDataKeys) {
                    console.log(`${key}: '${formData.get(key)}'`);
                }
            },
            eventBus: new EventBus(),
        }, template);
    }

    render() {
        if (this.props.eventBus) {
            this.props.eventBus.emit('form-validate');
        }
    }
}
