import Block from '../../utils/block';
import template from './template';

interface FormfieldProps {
    // classes: string,
    // text: string;
    // onClick?: () => void;
    // themaType: string,
    // thema: string,
    // href: string,
}

export default class Formfield extends Block {
    static componentName = 'Formfield';

    static template = template;

    constructor(props: FormfieldProps) {
        super({
            ...props,
        }, template);
    }
}
