import Block from '../../utils/block';
import template from './action.hbs';

interface ActionProps {
    classes: string,
    text: string;
    onClick?: () => void;
    themaType: string,
    thema: string,
    href: string,
}

export default class Action extends Block {
    constructor(props: ActionProps) {
        super({
            events: {
                click: props.onClick
            },
            ...props,
        }, template);
    }
}
