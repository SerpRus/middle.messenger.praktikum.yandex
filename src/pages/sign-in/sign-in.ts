import Block from '../../utils/block';
import template from './sign-in.hbs';

// import EventBus from '../../utils/event-bus';

interface SignInProps {
    fields:  {
        classes: string,
        id: string,
        name: string,
        type: string,
        label: string,
    }[],
    onSubmit: (e: Event) => void,
}

export default class SignIn extends Block<SignInProps> {
    constructor(props: SignInProps) {
        super({
            ...props,
            onSubmit: (e: Event) => {
                e.preventDefault();

                const form = this.refs.form?.getElement() as HTMLFormElement;
                const formData = new FormData(form);
                const formDataKeys = formData.keys();
                for (const key of formDataKeys) {
                    console.log(`${key}: '${formData.get(key)}'`);
                }
            }
            // submitOnClick: () => {
            //     const form = this.refs.form?.getElement() as HTMLFormElement;
            //     const formData = new FormData(form);
            //     const formDataKeys = formData.keys();
            //     for (const key of formDataKeys) {
            //         console.log(`${key}: '${formData.get(key)}'`);
            //     }
            // },
            // eventBus: new EventBus(),
        }, template);
    }

    render() {
        // if (this.props.eventBus) {
        //     this.props.eventBus.emit('form-validate');
        // }
    }
}
