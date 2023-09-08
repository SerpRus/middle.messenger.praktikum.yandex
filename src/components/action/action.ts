import { PropsWithRouter, withRouter } from '../../hocs/with-router';
import Block from '../../utils/block';
import template from './action.hbs';

interface ActionProps extends PropsWithRouter{
    classes?: string,
    text: string;
    onClick?: () => void;
    events?: {
        click?: (e: Event) => void;
    };
    themaType?: string,
    thema?: string,
    href?: string,
}

export default class Action extends Block<ActionProps> {
    static className = 'Action';

    constructor(props: ActionProps) {
        super({
            ...props,
            events: {
                click: (props.href)
                    ? (e: Event) => {
                        e.preventDefault();
                        this.navigate();
                    } : props.onClick
            },
        }, template);
    }

    navigate() {
        this.props.router.go(this.props.href as string);
    }
}

export const Link = withRouter(Action, 'Link');
