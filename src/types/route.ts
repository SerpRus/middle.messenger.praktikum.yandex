import TemplateType from '../types/template';

type RouteType = {
    [key: string]: {
        page: TemplateType,
        props?: object,
    },
};

export default RouteType;
