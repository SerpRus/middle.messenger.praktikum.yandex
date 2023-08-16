import Block from '../../utils/block';
import template from './formfield.hbs';

export default class Formfield extends Block {
    render() {
        return this.compile(
            template,
            {
                classes: this.props.classes,
                thema: this.props.thema,
                id: this.props.id,
                name: this.props.name,
                type: this.props.type,
                value: this.props.value,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled,
                label: this.props.label,
                error: this.props.error,
            }
        );
    }
}
