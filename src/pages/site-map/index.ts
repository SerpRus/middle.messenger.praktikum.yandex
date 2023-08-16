import Block from '../../utils/block';
import template from './site-map.hbs';
import data from './data';

export default class SiteMap extends Block {
    init() {
        this.children = this.createChildrenObject(data);
        // setTimeout(() => {
        //     this.setProps({
        //         title: 'new title',
        //     });
        // }, 1000);
    }

    render() {
        return this.compile(template, { ...this.props });
    }
}
