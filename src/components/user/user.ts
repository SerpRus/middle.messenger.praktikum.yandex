import Block from '../../utils/block';
import template from './user.hbs';

interface UserProps {
    classes?: string,
}

export default class User extends Block<UserProps> {
    static className = 'User';

    constructor(props: UserProps) {
        super({
            ...props,
        }, template);
    }
}
