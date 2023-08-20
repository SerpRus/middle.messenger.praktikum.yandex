import Handlebars from 'handlebars';

import PropsType from '../types/props';

export default function compile(template: string, context: PropsType) {
    Object.entries(context).forEach(([key, value]) => {
        template = template.replace(`{{${key}}}`, value);
    });

    const data = {
        ...context,
        __children: [],
        __refs: {},
    };

    const html = Handlebars.compile(template)(data);

    return { html, children: data.__children, refs: data.__refs };
}
