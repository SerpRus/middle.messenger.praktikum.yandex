import TemplateType from '../types/template';

type RouteType = {
    [key: string]: {
        // component: {
        //     getHtml: () => Promise<string>,
        //     getElements: () => void,
        //     initHandlers: () => void,
        // },
        // state?: string,

        // component: string,
        // state?: string,

        // component: {
        //     getTemplate: () => string,
        // }

        component: TemplateType

        // component: new () => {
        //     getTemplate: () => string,
        // }
    },
};

export default RouteType;
