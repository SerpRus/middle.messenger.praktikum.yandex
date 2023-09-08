import Block from '../utils/block';
import Router from '../utils/router';

export function withRouter(Component: typeof Block<any>, className: string) {
    type Props = typeof Component extends typeof Block<Record<string, any>> ? Record<string, any> : any;

    return class WithRouter extends Component {
        static className = className;

        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
