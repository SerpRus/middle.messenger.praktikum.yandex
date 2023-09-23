import Block from '../../utils/block';
import template from './text-with-action.hbs';
import eventBus from "../../utils/event-bus";

interface TextWithActionProps {
    id: number,
    eventBusName: string,
    onClick: () => void,
}

export default class TextWithAction extends Block<TextWithActionProps> {
    static componentName = 'TextWithAction';

    constructor(props: TextWithActionProps) {
        super({
            ...props,
            onClick: () => {
                eventBus.emit(this.props.eventBusName, {
                    userId: this.props.id
                })
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
