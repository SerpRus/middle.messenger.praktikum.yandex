import Block from '../../utils/block';
import template from './action.hbs';

export default class Action extends Block {
    render() {
        return this.compile(
            template,
            {
                classes: this.props.classes,
                themaType: this.props.themaType,
                thema: this.props.thema,
                target: this.props.target,
                href: this.props.href,
                attributes: this.props.attributes,
                text: this.props.text,
            }
        );
    }
}
