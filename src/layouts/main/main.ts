import Block from '../../utils/block';
import template from './main.hbs';
import { PropsType } from '../../types';

interface MainProps {
    classes?: string,
}

export default class Main extends Block<MainProps> {
    static componentName = 'Main';

    constructor(props: PropsType) {
        super({
            ...props
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
