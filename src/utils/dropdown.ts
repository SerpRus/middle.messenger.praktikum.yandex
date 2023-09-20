import eventBus from "./event-bus";

export class Dropdown {
    activeDropdown: HTMLElement | null = null;
    lastTarget: HTMLElement | null = null;

    classes = {
        open: 'open',
    };

    constructor() {
        eventBus.on('open-dropdown', this._openById);
    }

    public openByTarget = (target: HTMLElement, dropdown: HTMLElement) => {
        this._open(target, dropdown);
    }

    private _openById = (data: Record<string, any>) => {
        const { target, id } = data;

        const dropdown = document.querySelector(`#${id}`) as HTMLElement;

        if (!dropdown) {
            return;
        }

        this._open(target, dropdown);
    }

    private _open(target: HTMLElement, dropdown: HTMLElement) {
        if (target === this.lastTarget) {
            this.close();

            return;
        }

        if (this.activeDropdown) {
            this.close();
        }

        this.lastTarget = target;

        const dropdownHeight = dropdown.offsetHeight;
        const dropdownWidth = dropdown.offsetWidth;
        const { top, right, bottom, left  } = target.getBoundingClientRect();

        if (top - dropdownHeight < 0) {
            dropdown.style.top = `${bottom}px`;
        } else {
            dropdown.style.top = `${top - dropdownHeight}px`;
        }

        const { clientWidth } = document.documentElement;

        if (left + dropdownWidth > clientWidth) {
            dropdown.style.left = `${right - dropdownWidth}px`;
        } else {
            dropdown.style.left = `${left}px`;
        }

        dropdown.classList.add(this.classes.open);

        this.activeDropdown = dropdown;

        setTimeout(() => {
            document.addEventListener('click', this._documentClickHandler);
        });
    }

    private _documentClickHandler = (e: Event) => {
        e.stopPropagation();

        this.close();
    }

    public close = () => {
        if (!this.activeDropdown) {
            return;
        }

        this.activeDropdown.classList.remove(this.classes.open);

        this.activeDropdown = null;
        this.lastTarget = null;

        document.removeEventListener('click', this._documentClickHandler);
    }
}

export default new Dropdown();
