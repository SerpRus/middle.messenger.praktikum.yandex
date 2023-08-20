import Block from '../../utils/block';
import template from './template';

interface ActionProps {
    classes: string,
    text: string;
    onClick?: () => void;
    themaType: string,
    thema: string,
    href: string,
}

export default class Action extends Block {
    static componentName = 'Action';

    static template = template;

    constructor({ onClick, ...props }: ActionProps) {
        super({
            events: {
                click: onClick
            },
            ...props,
        }, template);
    }
}
