import Block from '../../utils/block';
import template from './error-500.hbs';

interface Error500Props {
    code: string,
    description: string,
}

export default class Error500 extends Block<Error500Props> {
    constructor(props: Error500Props) {
        super({
            ...props,
        }, template);
    }
}
