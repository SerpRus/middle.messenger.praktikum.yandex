import Block from '../../utils/block';
import template from './error-page.hbs';
import data from './data';

export default class ErrorPage extends Block {
    init() {
        this.children = this.createChildrenObject(data);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
