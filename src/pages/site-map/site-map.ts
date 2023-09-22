import Block from '../../utils/block';
import template from './site-map.hbs';

interface IconProps {
    title: string,
    links: {
        text: string,
        href: string,
    }[],
}

export default class SiteMap extends Block<IconProps> {
    constructor(props: IconProps) {
        super({
            ...props,
        }, template);
    }
}
