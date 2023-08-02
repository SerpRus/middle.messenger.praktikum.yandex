import Template from '../../modules/template';

import siteMap from './site-map.hbs';

export default class SiteMap extends Template {
    $root: HTMLElement;
    props: object;

    constructor($root:HTMLElement, props: object) {
        super();
        this.$root = $root;
        this.props = props;

        this.changeHTML();
    }

    changeHTML() {
        this.$root.innerHTML = siteMap(this.props);
    }
}
