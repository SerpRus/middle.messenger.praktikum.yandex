import Block from '../../utils/block';
import template from './form.hbs';

import eventBus from '../../utils/event-bus';
import Validate from '../../utils/validate';

interface FormProps {
    classes?: string,
    onSubmit?: () => void,
    onFocusout?: () => void,
    events: {
        submit?: () => void,
        focusout?: () => void,
    },
    isValidate: boolean,
    validate?: Validate
}

export default class Form extends Block<FormProps> {
    static componentName = 'Form';

    validate: Validate | null = null;

    constructor(props: FormProps) {
        super({
            ...props,
            events: {
                submit: props.onSubmit,
                focusout: props.onFocusout,
            },
        });

        if (this.props.isValidate) {
            this.validate = new Validate(this.getElement() as HTMLFormElement);

            const listeners = Object.keys(eventBus.listeners);

            if (!listeners.includes('form-validate')) {
                eventBus.on('form-validate', this._onFormValidate);
            }

            if (!listeners.includes('field-validate')) {
                eventBus.on('field-validate', this._onFieldValidate);
            }
        }
    }

    render() {
        return this.compile(template, this.props);
    }

    private _onFormValidate = () => {
        this.validate?.onFormSubmit();
    };

    private _onFieldValidate = (field: HTMLInputElement) => {
        this.validate?.onFieldFocusout(field);
    };
}
