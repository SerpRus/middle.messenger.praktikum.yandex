import eventBus from '../utils/event-bus.ts';

export class ModalUtil {
    classes = {
        open: 'open',
    };

    activeModal: HTMLElement | null = null;

    constructor() {
        eventBus.on('open-popup', this._openPopup);
    }

    private _openPopup = (modalId: string) => {
        const popup = document.querySelector(`#${modalId}`) as HTMLElement;

        if (!popup) {
            return;
        }

        this.activeModal = popup;

        popup.classList.add(this.classes.open);
    };

    public close() {
        if (!this.activeModal) {
            return;
        }

        this.activeModal.classList.remove(this.classes.open);

        this.activeModal = null;
    }
}

export default new ModalUtil();
