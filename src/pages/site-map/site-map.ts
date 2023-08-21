import Block from '../../utils/block';

import template from './site-map.hbs';

import { PropsType } from '../../types';

export default class SiteMap extends Block {
    constructor(props?: PropsType) {
        super({
            ...props,
        }, template);
    }
}
