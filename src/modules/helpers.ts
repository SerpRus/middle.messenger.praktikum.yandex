import Handlebars from 'handlebars/runtime';

export default function registerHelpers() {
    // Handlebars.registerHelper('defaultObject', function({hash}) {
    //     const newObject = hash.default;
    //
    //     for (let i = 0; i < Object.keys(hash).length; i++) {
    //         const key = Object.keys(hash)[i];
    //         console.log()
    //
    //         if (key === 'default') {
    //             continue;
    //         }
    //
    //         newObject[key] = hash[key];
    //     }
    //
    //     return newObject;
    // })

    Handlebars.registerHelper('object', function(req) {
        return {...req.data.root, ...req.hash};
    })

    Handlebars.registerHelper('array', function() {
        console.log(Array.from(arguments).slice(0, arguments.length-1))
        return Array.from(arguments).slice(0, arguments.length-1)
    })

    Handlebars.registerHelper('arrayObjects', function() {
        const result = [];

        for (let i = 0; i < arguments.length; i++) {
            const object = arguments[i];
            result.push(object);
            console.log(object)
        }

        console.log(result)

        return result[0];
    })
}
