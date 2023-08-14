import Block from '../../utils/block';
import template from './action.hbs';

export default class Index extends Block {
    render() {
        return this.compile(
            template,
            {
                classes: this.props.classes,
                thema: this.props.thema,
                href: this.props.href,
                text: this.props.text,
            }
        );
    }
}
