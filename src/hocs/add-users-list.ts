import Block from '../utils/block';
import eventBus from '../utils/event-bus';
import UserController from '../controllers/user-controller';

export interface PropsUsersList {

}

export default function addUsersList(Component: typeof Block<any>, componentName: string) {
    type Props = typeof Component extends typeof Block<Record<string, any>>
        ? Record<string, any>
        : any;

    return class AddUsersList extends Component {
        static componentName = componentName;

        constructor(props: Props & PropsUsersList) {
            super({
                ...props,
            });

            eventBus.on('search-users', this._searchUsers);
        }

        private _searchUsers = async (value: string) => {
            const searchUsersData: any = {
                login: value,
            };

            this.props.users = await UserController.search(searchUsersData);
        };
    };
}
