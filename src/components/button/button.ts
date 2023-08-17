import Block from '../../utils/block';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export class Button extends Block {
    constructor({label, onClick}: ButtonProps) {
        super({
            label,
            events: {
                click: onClick
            }
        });
    }

    render() {
        // language=hbs
        return `
      <button type="button">
          {{ label }}
      </button>
    `;
    }
}
