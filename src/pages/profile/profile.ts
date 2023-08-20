import Block from '../../utils/block';
import template from './template';

import PropsType from '../../types/props';

export default class ProfilePage extends Block {
    template = template;

    static componentName = 'ProfilePage';

    constructor(props: PropsType) {
        super({
            ...props,
            onLogout: () => {
                console.log('clicked');
            }
        }, template);
    }

    // protected render(): string {
    //     // language=hbs
    //     return `
    //         <div>
    //             Email: {{ email }}<br/>
    //             Login: {{ login }}<br/>
    //             {{{Action
    //                 text='Выйти123123'
    //                 onClick=onLogout
    //                 themaType='button'
    //                 thema='button-brand'
    //             }}}
    //         </div>
    //     `;
    // }
}
