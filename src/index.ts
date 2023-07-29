import Handlebars from 'handlebars/runtime';
// @ts-ignore
import greetings from './templates/greetings.hbs';
// @ts-ignore
import button from './partials/button.hbs';

Handlebars.registerPartial('button', button);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');

    if (!root) {
        return;
    }

    root.innerHTML = greetings({username: 'John'});

    setTimeout(() => {
        root.innerHTML = greetings({username: 'TEST!!!!'});
    }, 2000)
});
