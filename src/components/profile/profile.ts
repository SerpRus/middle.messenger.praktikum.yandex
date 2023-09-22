import Block from '../../utils/block';
import template from './profile.hbs';
import eventBus from '../../utils/event-bus';

interface ProfileProps {
    username: string,
    formfields: Record<string, any>[],
    footerActions: Record<string, any>[],
    data: Record<string, any>,
    isChangeUserInfo?: boolean,
    onSubmit: (e: Event) => void,
    onFocusout: (e: Event) => void,
    onClick: (e: Event) => void,
    onInput: (e: Event) => void,
}

export default class Profile extends Block<ProfileProps> {
    static componentName = 'Profile';

    constructor(props: ProfileProps) {
        super({
            ...props,
            ...props.data,
            onSubmit: (e: Event) => {
                e.preventDefault();

                const form = e.currentTarget as HTMLFormElement;
                const fields = form.querySelectorAll('input, textarea');
                const filedsArray: HTMLInputElement[] = Array.from(fields) as HTMLInputElement[];
                const values = filedsArray.map((field: HTMLInputElement) => {
                    const name = field.getAttribute('name');

                    return ([name, field.value]);
                });

                values.forEach((value) => {
                    console.log(`${value[0]}: '${value[1]}'`);
                });

                eventBus.emit('form-validate');

                if (!this.refs.form.validate.isValidForm) {
                    return;
                }

                if (this.props.isChangeUserInfo) {
                    eventBus.emit('save-user-info', values);
                }
            },
            onFocusout: (e: Event) => {
                const target = e.target as EventTarget;


                eventBus.emit('field-validate', target);
            },
            onInput: () => {
                if (this.props.isChangeUserInfo) {
                    eventBus.emit('change-user-avatar', this.refs.avatar);
                }
            }
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
