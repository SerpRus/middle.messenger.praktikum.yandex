import Block from '../../utils/block';
import teplate from './template';

interface ActionProps {
    classes: string,
    text: string;
    onClick?: () => void;
    themaType: string,
    thema: string,
    href: string,
}

export default class Action extends Block<ActionProps> {
    constructor({ onClick, ...props }: ActionProps) {
        super({
            events: {
                click: onClick
            },
            ...props,
        });
    }

    render() {
        // language=hbs
        return teplate;
    }
}
