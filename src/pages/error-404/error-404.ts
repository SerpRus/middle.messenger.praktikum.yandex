import Block from '../../utils/block.ts';
import template from './error-404.hbs';

interface Error404Props {
    code?: string,
    description?: string,
}

export default class Error404 extends Block<Error404Props> {
    constructor(props: Error404Props) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
