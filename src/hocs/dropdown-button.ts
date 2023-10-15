import Block from '../utils/block';
import dropdown from '../utils/dropdown.ts';
import eventBus from '../utils/event-bus.ts';

export interface PropsDropdownButton {
    dropdown?: typeof dropdown;
}

export function dropdownButton(Component: typeof Block<any>, componentName: string) {
    type Props = typeof Component extends typeof Block<Record<string, any>>
        ? Record<string, any>
        : any;

    return class DropdownButton extends Component {
        static componentName = componentName;

        constructor(props: Props & PropsDropdownButton) {
            super({
                ...props,
                dropdown: dropdown,
                events: {
                    click: (e: Event) => {
                        eventBus.emit('open-dropdown', {
                            target: e.target,
                            id: props.dropdownId,
                        });
                    }
                }
            });
        }
    };
}

