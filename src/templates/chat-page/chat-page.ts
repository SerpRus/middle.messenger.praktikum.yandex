import Template from '../../modules/template';

import chatPage from './chat-page.hbs';

export default class ChatPage extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root: HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = chatPage(this.props);
    }
}
