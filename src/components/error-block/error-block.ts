import Block from '../../utils/block';
import template from './error-block.hbs';

interface ErrorBlockProps {
    code: string,
    description: string,
}

export default class ErrorBlock extends Block<ErrorBlockProps> {
    static componentName = 'ErrorBlock';

    constructor(props: ErrorBlockProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
