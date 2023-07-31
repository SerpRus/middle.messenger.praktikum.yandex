import PartialType from '../types/partial';

import button from '/components/button/button.hbs';
import link from '/components/link/link.hbs';
import form from '/components/form/form.hbs';
import formfield from '/components/formfield/formfield.hbs';

import main from '/layouts/main/main.hbs';

const partials: PartialType = [
    {button},
    {link},
    {main},
    {form},
    {formfield},
];

export default partials;
