import PartialType from '../types/partial';

import action from '/components/action/action.hbs';
import form from '/components/form/form.hbs';
import formfield from '/components/formfield/formfield.hbs';
import icon from '/components/icon/icon.hbs';
import chatItem from '/components/chat-item/chat-item.hbs';
import dropdown from '/components/dropdown/dropdown.hbs';
import user from '/components/user/user.hbs';
import dropdownActionsList from '/components/dropdown-actions-list/dropdown-actions-list.hbs';
import modal from '/components/modal/modal.hbs';

import main from '/layouts/main/main.hbs';
import asidePanel from '/layouts/aside-panel/aside-panel.hbs';

const partials: PartialType[] = [
    {action},
    {main},
    {form},
    {formfield},
    {asidePanel},
    {icon},
    {chatItem},
    {dropdown},
    {user},
    {dropdownActionsList},
    {modal},
];

export default partials;
