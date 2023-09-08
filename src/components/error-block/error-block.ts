import Block from '../../utils/block';
import template from './error-block.hbs';

interface ErrorBlockProps {
    code: string,
    description: string,
}

export default class ErrorBlock extends Block<ErrorBlockProps> {
    static className = 'ErrorBlock';

    constructor(props: ErrorBlockProps) {
        super({
            ...props,
        }, template);
    }
}
