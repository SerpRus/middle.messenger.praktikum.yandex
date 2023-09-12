import template from './change-password.hbs';
import Block from '../../utils/block';
import { withStore } from '../../utils/store';

interface ChangePasswordProps {
    username: string,
    first_name: string,
    second_name: string,
    display_name: string,
    avatar?: string,
    data: Record<string, any>,
    onSubmit: (e: Event) => void,
    onFocusout: (e: Event) => void,
}

export class ChangePasswordBase extends Block<ChangePasswordProps> {
    constructor(props: ChangePasswordProps) {
        const displayName = props.display_name || `${props.first_name} ${props.second_name}`;

        super({
            ...props,
            data: {
                isValidate: true,
                isAvatarDisabled: true,
                footerActionsClasses: 'profile__footer-actions--change-info',
                username: displayName,
                avatarSrc: (props.avatar) ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}` : null,
                formfields: [
                    {
                        id: 'oldPassword',
                        name: 'oldPassword',
                        type: 'password',
                        label: 'Старый пароль',
                        value: 'password',
                    }, {
                        id: 'newPassword',
                        name: 'newPassword',
                        type: 'password',
                        label: 'Новый пароль',
                        value: 'testpassword',
                    }, {
                        id: 'newPasswordReepeat',
                        name: 'newPasswordReepeat',
                        type: 'password',
                        label: 'Повторите новый пароль',
                        value: 'testpassword',
                    },
                ],
                footerActions: [
                    {
                        text: 'Сохранить',
                        themaType: 'button',
                        thema: 'button-brand',
                        type: 'submit',
                        ref: 'password-change-submit'
                    }, {
                        text: 'Отмена',
                        themaType: 'link',
                        thema: 'link-medium',
                        href: '/settings',
                    },
                ],
            },
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}

const withUser = withStore((state) => ({ ...state.user }));
const ChangePassword = withUser(ChangePasswordBase);
export default ChangePassword
