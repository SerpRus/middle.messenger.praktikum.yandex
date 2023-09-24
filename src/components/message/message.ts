import Block from '../../utils/block';
import template from './message.hbs';

interface MessageProps {
    time: string
}

export default class Message extends Block<MessageProps> {
    static componentName = 'Message';

    constructor(props: MessageProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }

    init() {
        this.props.time = this.getTime();
    }

    getTime() {
        const date = new Date(this.props.time);

        return `${date.getHours()}:${date.getMinutes()}`;
    }
}
