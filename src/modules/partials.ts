import PartialType from '../types/partial';

import button from '/components/button/button.hbs';
import link from '/components/link/link.hbs';
import form from '/components/form/form.hbs';
import formfield from '/components/formfield/formfield.hbs';
import icon from '/components/icon/icon.hbs';
import chatItem from '/components/chat-item/chat-item.hbs';
import dropdown from '/components/dropdown/dropdown.hbs';

import main from '/layouts/main/main.hbs';
import asidePanel from '/layouts/aside-panel/aside-panel.hbs';

const partials: PartialType = [
    {button},
    {link},
    {main},
    {form},
    {formfield},
    {asidePanel},
    {icon},
    {chatItem},
    {dropdown},
];

export default partials;
