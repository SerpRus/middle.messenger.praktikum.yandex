import Block from '../../utils/block';
import template from './form.hbs';

import Validate from '../../modules/validate';

interface FormProps {
    classes: string,
}

export default class Form extends Block {
    constructor(props?: FormProps) {
        super({
            ...props,
        }, template);

        if (this.props.isValidate && this.props.eventBus) {
            this.props.eventBus.on('form-validate', this._onValidate);
        }
    }

    private _onValidate = () => {
        const form = this.getElement() as HTMLFormElement;

        new Validate(form);
    };
}
