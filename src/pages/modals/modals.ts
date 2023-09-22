import Block from '../../utils/block';
import template from './modals.hbs';


export default class ModalsPage extends Block<{}> {
    constructor() {
        super({
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
