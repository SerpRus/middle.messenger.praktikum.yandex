import Block from '../../utils/block';

import PropsType from '../../types/props';

export default class ProfilePage extends Block<PropsType> {
    constructor(props: PropsType) {
        super({
            ...props,
            onLogout: () => {
                console.log(23213123123);
            }
        });
    }

    protected render(): string {
        // language=hbs
        return `
            <div>
                Email: {{ email }}<br/>
                Login: {{ login }}<br/>
                {{{Action
                    text='Выйти123123'
                    onClick=onLogout
                    themaType='button'
                    thema='button-brand'
                }}}
            </div>
        `;
    }
}
