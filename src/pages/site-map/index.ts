import Block from '../../utils/block';
import template from './site-map.hbs';
// import data from './data';

export default class SiteMap extends Block {
    init() {
        // this.children = {};
        // setTimeout(() => {
        //     this.setProps({
        //         title: 'new title',
        //     });
        // }, 1000);
    }

    render() {
        // return this.compile(template, { ...this.props });
        return `<div>
            Email: {{ email }}<br/>
            Login: {{ login }}<br/>
            {{{Button label="Выйти" onClick=onLogout}}}
        </div>`
    }
}
