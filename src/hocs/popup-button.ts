import Block from '../utils/block';
import modalUtil from '../utils/modal-util';

export interface PropsPopupButton {
    modal: typeof modalUtil;
}


export function popupButton(Component: typeof Block<any>, componentName: string) {
    type Props = typeof Component extends typeof Block<Record<string, any>> ? Record<string, any> : any;

    return class PopupButton extends Component {
        static componentName = componentName;

        constructor(props: Props & PropsPopupButton) {
            super({
                ...props,
                modal: modalUtil,
            });
        }
    }
}

