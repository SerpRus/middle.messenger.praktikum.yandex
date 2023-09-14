import Block from '../../utils/block';
import template from './messenger.hbs';

export default class Messenger extends Block {
    render() {
        return this.compile(template, this.props);
    }
}
