import Block from '../../utils/block';
import template from './sign-up.hbs';
import data from './data';

export default class SignUp extends Block {
    init() {
        this.children = this.createChildrenObject(data);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
