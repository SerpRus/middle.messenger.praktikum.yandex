import Block from '../../utils/block';
import template from './chat-item.hbs';

interface ChatItemProps {
    classes: string,
    selected: boolean;
}

export default class ChatItem extends Block {
    constructor(props?: ChatItemProps) {
        super({
            ...props,
        }, template);
    }
}