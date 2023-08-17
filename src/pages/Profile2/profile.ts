import Block from "../../utils/block.ts";
import template from './profile.hbs';

export class ProfilePage extends Block {
    constructor(props) {
        super({
            ...props,
        });
    }

    protected render(): string {
        return `<div>
            Email: {{ email }}<br/>
            Login: {{ login }}<br/>
            {{{Button label="Выйти123123" onClick=onLogout}}}
        </div>`
    }
}
