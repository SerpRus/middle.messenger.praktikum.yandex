import Block from '../../utils/block';
import template from './formfield.hbs';

interface FormfieldProps {
    // classes: string,
    // text: string;
    // onClick?: () => void;
    // themaType: string,
    // thema: string,
    // href: string,
}

export default class Formfield extends Block {
    constructor(props: FormfieldProps) {
        super({
            ...props,
        }, template);
    }
}
