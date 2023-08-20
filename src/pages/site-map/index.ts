import Block from '../../utils/block';
import template from './template';
import PropsType from '../../types/props';
// import data from './data';

export default class SiteMap extends Block {
    static componentName = 'SiteMap';

    static template = template;

    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
