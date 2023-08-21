import Block from '../../utils/block';
import template from './main.hbs';
import { PropsType } from '../../types';

export default class Main extends Block {
    constructor(props: PropsType) {
        super({
            ...props
        }, template);
    }
}
