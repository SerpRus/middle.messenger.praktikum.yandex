import Block from '../../utils/block';
import teplate from './template';

interface MainProps {
    classes: string;
}

export default class Main extends Block<MainProps> {
    constructor(props: MainProps) {
        super({
            ...props
        });
    }

    render() {
        // language=hbs
        return teplate;
    }
}
