import Block from '../../utils/block';
import template from './delete-users-popup.hbs';
import eventBus from '../../utils/event-bus';
import store, { withStore } from '../../utils/store';
import { UsersData } from '../../api/chats-api';
import ChatController from '../../controllers/chats-controller';

interface DeleteUsersPopupProps {
    classes?: string,
    eventBusName: string,
    users: any,
}

type ChatId = {
    userId: number,
}

export class DeleteUsersPopupBase extends Block<DeleteUsersPopupProps> {
    static componentName = 'DeleteUsersPopup';

    constructor(props: DeleteUsersPopupProps) {
        super({
            ...props,
            eventBusName: 'removeUserFromChat',
        });

        eventBus.on(this.props.eventBusName, this._removeUserFromChat);
        eventBus.on('getChatUsers', this._getChatUsers);
    }

    render() {
        return this.compile(template, this.props);
    }

    private _removeUserFromChat = async (data: ChatId) => {
        const { userId } = data;

        const { id: selectedChatId } = store.getState().selectedChat;

        const deleteUserData: UsersData = {
            users: [
                userId
            ],
            chatId: selectedChatId,
        }

        await ChatController.deleteUsers(deleteUserData);

        this._getChatUsers();
    }

    private _getChatUsers = () => {
        this.props.users = store.getState().chatUsers;
    }
}

const withUsers = withStore((state) => {
    if (!state.chatUsers) {
        return;
    }

    return {
        users: state.chatUsers,
    };
});
const DeleteUsersPopup = withUsers(DeleteUsersPopupBase);
export default DeleteUsersPopup
