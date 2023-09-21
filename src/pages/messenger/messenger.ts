import Block from '../../utils/block';
import template from './messenger.hbs';

interface MessengerProps {
}

export default class Messenger extends Block<MessengerProps> {
    constructor(props: MessengerProps) {
        super({
            ...props,
            addUserPopup: {
                id: 'addUser',
                title: 'Добавить пользователя',
                field: {
                    id: 'addUserField',
                    name: 'addUserField',
                    type: 'text',
                    label: 'Логин пользователя',
                    ref: 'newUserName',
                },
                ref: 'addUserPopup',
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
