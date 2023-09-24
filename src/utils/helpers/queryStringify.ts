import isObject from './is-object';

export type StringIndexed = Record<string, any>;

export default function queryStringify(data: StringIndexed): string | never {
    if (!isObject(data)) {
        throw new Error('input must be an object');
    }

    let result = '';

    function converter(item: StringIndexed) {
        const entries = Object.entries(item);

        entries.forEach(([key, value]) => {
            if (Array.isArray(value)) {
                const params = value.reduce((acc, curr, index) => {
                    return acc += `${key}[${index}]=${curr}&`;
                }, '');

                result += params;
            } else if (isObject(value)) {
                result += key;

                findParamsInObject(value);
            } else {
                result += `${key}=${value}&`;
            }
        })

        return result;
    }

    function findParamsInObject(object: StringIndexed) {
        const entries = Object.entries(object);
        entries.forEach(([key, value]) => {
            result += `[${key}]`;

            if (isObject(value)) {
                findParamsInObject(value)
            } else {
                result += `=${value}&`;
            }
        });
    }

    converter(data)

    return result.slice(0, -1);
}
