import Block from '../../utils/block';
import template from './profile.hbs';

import { PropsType } from '../../types';

import EventBus from '../../utils/event-bus';

export default class ProfilePage extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
            eventBus: new EventBus(),
        }, template);
    }

    render() {
        this.refs.form.getElement()?.addEventListener('submit', () => {
            const form = this.refs.form?.getElement() as HTMLFormElement;
            const formData = new FormData(form);
            const formDataKeys = formData.keys();
            for (const key of formDataKeys) {
                console.log(`${key}: '${formData.get(key)}'`);
            }
        });

        if (this.props.eventBus) {
            this.props.eventBus.emit('form-validate');
        }
    }
}
