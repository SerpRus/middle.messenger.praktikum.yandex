import Block from '../../utils/block';
import template from './profile.hbs';

import { PropsType } from '../../types';

export default class ProfilePage extends Block {
    constructor(props: PropsType) {
        super({
            ...props,
        }, template);
    }
}
