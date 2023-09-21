import Block from '../../utils/block';
import template from './add-user.hbs';
import ChatController from '../../controllers/chats-controller';
import { AddUserData } from '../../api/chats-api';
import store from '../../utils/store';

interface AddUserProps {
    id: number,
    onAddUser: () => void,
}

export default class AddUser extends Block<AddUserProps> {
    static componentName = 'AddUser';

    constructor(props: AddUserProps) {
        super({
            ...props,
            onAddUser: async () => {
                const { id: userId } = this.props;
                const { id: selectedChatId } = store.getState().selectedChat;

                const addUserData: AddUserData = {
                    users: [
                        userId
                    ],
                    chatId: selectedChatId,
                }

                await ChatController.addUsers(addUserData);
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
