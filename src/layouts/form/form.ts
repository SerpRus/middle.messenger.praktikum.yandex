import Block from '../../utils/block';
import template from './form.hbs';

import EventBus from '../../utils/event-bus';
import Validate from '../../modules/validate';

interface FormProps {
    classes?: string,
    onSubmit?: () => void,
    onFocusout?: () => void,
    events: {
        submit?: () => void,
        focusout?: () => void,
    },
    isValidate: boolean,
    eventBus: EventBus,
}

export default class Form extends Block<FormProps> {
    static className = 'Form';

    validate: Validate | null = null;

    constructor(props: FormProps) {
        super({
            ...props,
            events: {
                submit: props.onSubmit,
                focusout: props.onFocusout,
            }
        }, template);

        if (this.props.isValidate && this.props.eventBus) {
            this.validate = new Validate(this.getElement() as HTMLFormElement);

            this.props.eventBus.on('form-validate', this._onFormValidate);
            this.props.eventBus.on('field-validate', this._onFieldValidate);
        }
    }

    private _onFormValidate = () => {
        this.validate?.onFormSubmit();
    };

    private _onFieldValidate = (field: HTMLInputElement) => {
        this.validate?.onFieldFocusout(field);
    };
}
