import Block from '../utils/block';
import Router from '../utils/router';

export function withRouter(Component: typeof Block<any>, componentName: string) {
    type Props = typeof Component extends typeof Block<Record<string, any>> ? Record<string, any> : any;

    return class WithRouter extends Component {
        static componentName = componentName;

        constructor(props: Props & PropsWithRouter) {
            super({ ...props, router: Router });
        }
    }
}

export interface PropsWithRouter {
    router: typeof Router;
}
