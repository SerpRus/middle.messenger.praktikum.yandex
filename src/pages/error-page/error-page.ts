import Block from '../../utils/block';
import template from './template';

import PropsType from '../../types/props';

export default class ErrorPage extends Block<PropsType> {
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
        return template;
    }
}
