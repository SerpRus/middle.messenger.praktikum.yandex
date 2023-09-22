type CallbackType = (...args: any[]) => void;

export class EventBus {
    public readonly listeners: {
        [key: string]: CallbackType[],
    } = {};

    on(event: string, callback: CallbackType) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    off(event: string, callback: CallbackType) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback,
        );
    }

    emit(event: string, ...args: { [key: string]: any }[] | string[]) {
        if (!this.listeners[event]) {
            return;
        }

        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}

export default new EventBus();
