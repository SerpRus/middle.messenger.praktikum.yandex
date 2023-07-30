import CreateApp from './modules/create-app';
import Chat from './modules/chat';

import AppType from './types/app';

const app = {
    init() {
        new CreateApp('#app').render(Chat as AppType);
    },
    // load() {
    // },
    // resize() {
    // },
    // scroll() {
    // },
};

document.addEventListener('DOMContentLoaded', app.init);
// window.addEventListener('load', app.load);
// window.addEventListener('resize', app.resize);
// document.addEventListener('scroll', app.scroll);
