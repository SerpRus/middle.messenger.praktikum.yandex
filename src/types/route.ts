import { TemplateDelegate } from 'handlebars';

type RouteType = {
    [key: string]: {
        page: TemplateDelegate,
        props?: object,
    },
};

export default RouteType;
