import Block from '../../utils/block';
import template from './search-users.hbs';
import eventBus from "../../utils/event-bus";

interface SearchUsersProps {
    fieldValue: string,
    users: Record<string, any>,
    onSearch: (e: Event) => void,
}

export default class SearchUsers extends Block<SearchUsersProps> {
    static componentName = 'SearchUsers';

    constructor(props: SearchUsersProps) {
        super({
            ...props,
            onSearch: async (e: Event) => {
                const { value } = e.target as HTMLInputElement;

                eventBus.emit('search-users', value);
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
