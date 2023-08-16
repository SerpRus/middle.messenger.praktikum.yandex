import Block from '../../utils/block';
import template from './sign-in.hbs';
import data from './data';

export default class SignIn extends Block {
    init() {
        this.children = this.createChildrenObject(data);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
