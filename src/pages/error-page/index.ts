import Block from '../../utils/block';
import template from './error-page.hbs';
import Action from '../../components/action';

const link = {
    thema: 'link',
    href: '/chats',
    text: 'Назад к чатам',
};

export default class ErrorPage extends Block {
    init() {
        this.children.action = new Action(link);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
