import Block from '../../utils/block';
import template from './settings.hbs';
import EventBus from "../../utils/event-bus";
import { withStore } from '../../utils/store';
import AuthController from '../../controllers/auth-controller';

interface SettingsProps {
    username: string,
    data: Record<string, any>,
    email: string,
    login: string,
    first_name: string,
    second_name: string,
    display_name: string,
    phone: string,
    avatar?: string,
    onSubmit: (e: Event) => void,
    onFocusout: (e: Event) => void,
    eventBus?: EventBus,
    events: {
        click?: () => void,
    },
    onClick?: () => void,
}

class SettingsBase extends Block<SettingsProps> {
    constructor(props: SettingsProps) {
        const displayName = props.display_name || `${props.first_name} ${props.second_name}`;

        super({
            ...props,
            ...props.data,
            data: {
                isAvatarDisabled: true,
                username: displayName,
                avatarSrc: (props.avatar) ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}` : null,
                formfields: [
                    {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        label: 'Почта',
                        value: props.email,
                        disabled: true,
                    }, {
                        id: 'login',
                        name: 'login',
                        type: 'text',
                        label: 'Логин',
                        value: props.login,
                        disabled: true,
                    }, {
                        id: 'first_name',
                        name: 'first_name',
                        type: 'text',
                        label: 'Имя',
                        value: props.first_name,
                        disabled: true,
                    }, {
                        id: 'second_name',
                        name: 'second_name',
                        type: 'text',
                        label: 'Фамилия',
                        value: props.second_name,
                        disabled: true,
                    }, {
                        id: 'display_name',
                        name: 'display_name',
                        type: 'text',
                        label: 'Имя в чате',
                        value: displayName,
                        disabled: true,
                    }, {
                        id: 'phone',
                        name: 'phone',
                        type: 'tel',
                        label: 'Телефон',
                        value: props.phone,
                        disabled: true,
                    },
                ],
                footerActions: [
                    {
                        text: 'Изменить данные',
                        themaType: 'link',
                        thema: 'link-medium',
                        href: '/change-user-info',
                    }, {
                        text: 'Изменить пароль',
                        themaType: 'link',
                        thema: 'link-medium',
                        href: '/change-password',
                    }, {
                        text: 'Выйти',
                        themaType: 'link',
                        thema: 'link-medium-highlighted',
                        type: 'button',
                        onClick: async () => {
                            await AuthController.logout();
                        },
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
const Settings = withUser(SettingsBase);
export default Settings
