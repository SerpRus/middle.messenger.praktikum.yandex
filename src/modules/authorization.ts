export default class Authorization {
    constructor() {
        this.init();
    }

    init() {
        this.initHandlers();
    }

    initHandlers() {
        document.querySelector('[data-authorization-button]')?.addEventListener('click', () => {
            localStorage.setItem('isAuthorized', 'true');
        });
    }
}
