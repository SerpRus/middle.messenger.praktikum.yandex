import Block from '../../utils/block';
import template from './user.hbs';

interface UserProps {
    classes?: string,
}

export default class User extends Block<UserProps> {
    static componentName = 'User';

    constructor(props: UserProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
