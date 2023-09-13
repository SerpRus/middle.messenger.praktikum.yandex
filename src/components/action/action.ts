import { PropsWithRouter, withRouter } from '../../hocs/with-router';
import { PropsPopupButton, popupButton } from '../../hocs/popup-button';
import Block from '../../utils/block';
import template from './action.hbs';
import eventBus from '../../utils/event-bus';

interface ActionProps extends PropsWithRouter, PropsPopupButton {
    classes?: string,
    text: string;
    onClick?: () => void;
    events?: {
        click?: (e: Event) => void;
    };
    themaType?: string,
    thema?: string,
    href?: string,
    modalId?: string,
}

export default class Action extends Block<ActionProps> {
    static componentName = 'Action';

    constructor(props: ActionProps) {
        super({
            ...props,
            events: {
                click: (props.href)
                    ? (e: Event) => {
                        e.preventDefault();
                        this.navigate();
                    } : (props.modalId)
                        ? () => {
                            if (props.modalId) {
                                eventBus.emit('open-popup', props.modalId);
                            }
                        }
                        : props.onClick
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }

    navigate() {
        this.props.router.go(this.props.href as string);
    }
}

export const Link = withRouter(Action, 'Link');
export const PopupButton = popupButton(Action, 'PopupButton');
