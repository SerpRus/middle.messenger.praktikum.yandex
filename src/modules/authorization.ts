export default class Authorization {
    constructor() {
        Authorization.init();
    }

    static init() {
        Authorization.initHandlers();
    }

    static initHandlers() {
        // TODO: тестовая авторизация
        document.querySelector('[data-authorization-button]')?.addEventListener('click', () => {
            localStorage.setItem('isAuthorized', 'true');

            window.router.render('/');
        });
    }
}
