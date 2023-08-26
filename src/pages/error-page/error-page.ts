import Block from '../../utils/block';
import template from './error-page.hbs';

interface ErrorPageProps {
    code: string,
    description: string,
}

export default class ErrorPage extends Block<ErrorPageProps> {
    constructor(props: ErrorPageProps) {
        super({
            ...props,
        }, template);
    }
}
