import Block from '../../utils/block';
import template from './change-user-info.hbs';
import EventBus from '../../utils/event-bus';
import { withStore } from '../../utils/store';
import { ProfileData } from "../../api/user-api";
import UserController from '../../controllers/user-controller';

interface ChangeUserInfoProps {
    username: string,
    data: Record<string, any>,
    email: string,
    login: string,
    first_name: string,
    second_name: string,
    display_name: string,
    phone: string,
    avatar: string,
    onSubmit: (e: Event) => void,
    onFocusout: (e: Event) => void,
    eventBus: EventBus,
}

class ChangeUserInfoBase extends Block<ChangeUserInfoProps> {
    constructor(props: ChangeUserInfoProps) {
        const displayName = props.display_name || `${props.first_name} ${props.second_name}`;

        super({
            ...props,
            data: {
                isValidate: true,
                footerActionsClasses: 'profile__footer-actions--change-info',
                username: displayName,
                avatarSrc: (props.avatar) ? `https://ya-praktikum.tech/api/v2/resources${props.avatar}` : 'test',
                formfields: [
                    {
                        id: 'email',
                        name: 'email',
                        type: 'email',
                        label: 'Почта',
                        value: props.email,
                    }, {
                        id: 'login',
                        name: 'login',
                        type: 'text',
                        label: 'Логин',
                        value: props.login,
                    }, {
                        id: 'first_name',
                        name: 'first_name',
                        type: 'text',
                        label: 'Имя',
                        value: props.first_name,
                    }, {
                        id: 'second_name',
                        name: 'second_name',
                        type: 'text',
                        label: 'Фамилия',
                        value: props.second_name,
                    }, {
                        id: 'display_name',
                        name: 'display_name',
                        type: 'text',
                        label: 'Имя в чате',
                        value: displayName,
                    }, {
                        id: 'phone',
                        name: 'phone',
                        type: 'tel',
                        label: 'Телефон',
                        value: props.phone,
                    },
                ],
                footerActions: [
                    {
                        text: 'Сохранить',
                        themaType: 'button',
                        thema: 'button-brand',
                        ref: 'changeInfoSumbit',
                    }, {
                        text: 'Отмена',
                        themaType: 'link',
                        thema: 'link-medium',
                        href: '/settings',
                    },
                ],
            },
            eventBus: new EventBus(),
        }, template);

        this.props.eventBus.on('change-user-info', this._changeUserInfo);
        this.props.eventBus.on('change-user-avatar', this._changeUserAvatar);

    }

    private _changeUserInfo = async (values: [string | null][]) => {
        const currentValues = values.filter((value) => {
            return value[0] !== 'avatar';
        });

        const data: ProfileData = Object.fromEntries(currentValues);

        await UserController.profile(data);
    }

    private _changeUserAvatar = async (target: HTMLInputElement) => {
        if (!target.files) {
            return;
        }

        const avatar = target.files[0];

        const formData = new FormData();
        formData.append('avatar', avatar);
        const avatarPath = await UserController.avatar(formData);

        const resourcesPath = 'https://ya-praktikum.tech/api/v2/resources';
        const avatarSrc = `${resourcesPath}${avatarPath}`;

        this.props.eventBus.emit('change-user-avatar-img', avatarSrc);
    }
}

const withUser = withStore((state) => ({ ...state.user }));
const ChangeUserInfo = withUser(ChangeUserInfoBase);
export default ChangeUserInfo
