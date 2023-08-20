import Block from '../../utils/block';
import template from './template';
import PropsType from '../../types/props';

export default class Main extends Block {
    static componentName = 'Main';

    static template = template;

    constructor(props: PropsType) {
        super({
            ...props
        }, template);
    }
}
