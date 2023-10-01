import { PropsWithRouter, withRouter } from '../../hocs/with-router.ts';
import { PropsPopupButton, popupButton } from '../../hocs/popup-button.ts';
import { PropsDropdownButton, dropdownButton } from '../../hocs/dropdown-button.ts';
import Block from '../../utils/block.ts';
import template from './action.hbs';

interface ActionProps extends PropsWithRouter, PropsPopupButton, PropsDropdownButton {
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
                click: (props.events?.click)
                    ? props.events.click
                    : props.onClick
            },
        });
    }

    render() {
        return this.compile(template, this.props)
    }
}

export const Link = withRouter(Action, 'Link');
export const PopupButton = popupButton(Action, 'PopupButton');
export const DropdownButton = dropdownButton(Action, 'DropdownButton');
