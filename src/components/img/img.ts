import Block from '../../utils/block';
import template from './img.hbs';

interface ImgProps {
    classes?: string,
    src: string,
}

export default class Img extends Block<ImgProps> {
    static componentName = 'Img';

    constructor(props: ImgProps) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
