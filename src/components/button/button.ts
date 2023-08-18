import Block from '../../utils/block';
import teplate from './template';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export default class Button extends Block<ButtonProps> {
    constructor({ label, onClick }: ButtonProps) {
        super({
            label,
            events: {
                click: onClick
            }
        });

        console.log(teplate)
    }

    render() {
        // language=hbs
        return teplate;
    }
}
