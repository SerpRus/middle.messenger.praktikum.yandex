import CreateApp from './utils/create-app';
import Chat from './utils/chat';

import { AppType } from './types';

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
