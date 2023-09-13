export class Dropdown {
    activeDropdown: HTMLElement | null = null;

    classes = {
        open: 'open',
    };

    constructor() {
        this.init();
    }

    init() {
        this.initHandlers();
    }

    initHandlers() {

    }

    public open = (target: HTMLElement, dropdown: HTMLElement) => {
        const dropdownHeight = dropdown.offsetHeight;
        const { top, bottom, left } = target.getBoundingClientRect();

        if (top - dropdownHeight < 0) {
            dropdown.style.top = `${bottom}px`;
        } else {
            dropdown.style.top = `${top - dropdownHeight}px`;
        }

        dropdown.style.left = `${left}px`;

        dropdown.classList.add(this.classes.open);

        this.activeDropdown = dropdown;

        document.addEventListener('click', this.close);
    }

    public close = () => {
        if (!this.activeDropdown) {
            return;
        }

        this.activeDropdown.classList.remove(this.classes.open);

        this.activeDropdown = null;

        document.removeEventListener('click', this.close);
    }
}

export default new Dropdown();
