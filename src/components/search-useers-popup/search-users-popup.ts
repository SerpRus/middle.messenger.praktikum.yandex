import Block from '../../utils/block';
import template from './search-users-popup.hbs';

interface SearchUsersPopupProps {
    classes?: string,
}

export default class SearchUsersPopup extends Block<SearchUsersPopupProps> {
    static componentName = 'SearchUsersPopup';

    constructor(props: SearchUsersPopupProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
