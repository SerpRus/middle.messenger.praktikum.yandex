import Block from '../../utils/block';
import template from './img.hbs';

interface ImgProps {
    classes?: string,
    src: string,
}

export default class Img extends Block<ImgProps> {
    static className = 'Img';

    constructor(props: ImgProps) {
        super({
            ...props,
        }, template);
    }
}
