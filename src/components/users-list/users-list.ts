import Block from '../../utils/block';
import template from './users-list.hbs';
import eventBus from '../../utils/event-bus';
import UserController from '../../controllers/user-controller';

interface UsersListProps {
    users: Record<string, any>,
}

export default class UsersList extends Block<UsersListProps> {
    static componentName = 'UsersList';

    constructor(props: UsersListProps) {
        super({
            ...props,
        });

        eventBus.on('search-users', this._searchUsers);
    }

    render() {
        return this.compile(template, this.props);
    }

    private _searchUsers = async (value: string) => {
        const searchUsersData: any = {
            login: value,
        }

        this.props.users = await UserController.search(searchUsersData);
    }
}
