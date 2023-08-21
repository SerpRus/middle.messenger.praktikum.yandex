// import Handlebars from 'handlebars';

import PropsType from '../types/props';

export default function compile(template: string, context: PropsType) {
    const data = {
        ...context,
        __children: [],
        __refs: {},
    };

    // const html = Handlebars.compile(template)(data);
    console.log(template)
    const html = template(data);
    console.log(html)

    return { html, children: data.__children, refs: data.__refs };
}
