import Block from '../../utils/block';
import template from './chat-page.hbs';
import { PropsType } from '../../types';

export default class ChatPage extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
