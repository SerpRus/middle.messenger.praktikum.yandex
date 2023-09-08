import isObject from './is-object';
import { Indexed } from '../../types';

export default function merge(lhs: Indexed, rhs: Indexed): Indexed {
    if (!isObject(rhs)) {
        return lhs;
    }

    if (isObject(lhs) && isObject(rhs)) {
        for (const key in rhs) {
            if (isObject(rhs[key])) {
                if (!lhs[key]) {
                    lhs[key] = {};
                }

                merge(lhs[key] as Indexed, rhs[key] as Indexed);
            } else {
                lhs[key] = rhs[key];
            }
        }
    }

    return lhs;
}
