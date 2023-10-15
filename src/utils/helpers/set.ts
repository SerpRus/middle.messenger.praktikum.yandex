import merge from './merge';
import isObject from './is-object';
import { Indexed } from '../../types';

export default function set(
    object: Indexed | unknown, path: string, value: unknown
): Indexed | unknown {
    if (typeof path !== 'string') {
        throw new Error('path must be string');
    }

    if (!isObject(object)) {
        return object;
    }

    const props = path.split('.');

    const newObject = props.reduceRight((acc, current) => {
        return { [current]: acc };
    }, value);

    return merge(object as Indexed, newObject as Indexed);
}
