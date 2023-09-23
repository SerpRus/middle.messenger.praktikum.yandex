import Block from '../../utils/block';
import template from './users-list.hbs';
import addUsersList from "../../hocs/add-users-list";

interface UsersListProps {
    users: Record<string, any>,
}

export default class UsersList extends Block<UsersListProps> {
    static componentName = 'UsersList';

    constructor(props: UsersListProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}

export const AddUsersList = addUsersList(UsersList, 'AddUsersList');
