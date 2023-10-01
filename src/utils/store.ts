import set from './helpers/set';
import { EventBus } from './event-bus';
import Block from './block';
import { User } from '../api/auth-api';
import { Chats } from '../api/chats-api';

export enum StoreEvents {
    Updated = 'updated',
}

interface State {
    user: User,
    chats: Chats[],
    selectedChat?: Record<string, any>,
    messages?: any,
    chatUsers?: any,
}

export class Store extends EventBus {
    private state: any = {};

    public set(keypath: string, data: unknown) {
        set(this.state, keypath, data);

        this.emit(StoreEvents.Updated, this.getState());
    }

    public getState() {
        return this.state;
    }
}

const store = new Store();

// @ts-ignore
window.store = store;

export function withStore<SP>(mapStateToProps: (state: State) => SP) {
    return function wrap<P>(Component: typeof Block<any>) {
        return class WithStore extends Component {
            constructor(props: Omit<P, keyof SP>) {
                let previousState = mapStateToProps(store.getState());

                super({ ...(props as P), ...previousState });

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState());

                    previousState = stateProps;

                    this.setProps({ ...stateProps });
                });
            }
        };
    };
}

export default store;
