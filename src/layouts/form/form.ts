import Block from '../../utils/block';
import template from './form.hbs';

// import Validate from '../../modules/validate';

interface FormProps {
    classes?: string,
    onSubmit?: () => void;
    events: {
        submit?: () => void;
    };
}

export default class Form extends Block<FormProps> {
    static className = 'Form';

    constructor(props: FormProps) {
        console.log(props)
        super({
            ...props,
            events: {
                submit: props.onSubmit,
            }
        }, template);

        // if (this.props.isValidate && this.props.eventBus) {
        //     this.props.eventBus.on('form-validate', this._onValidate);
        // }
    }

    // private _onValidate = () => {
    //     const form = this.getElement() as HTMLFormElement;
    //
    //     new Validate(form);
    // };
}
