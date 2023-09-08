export default function isObject(item: unknown) {
    return typeof item === 'object' &&
        !Array.isArray(item) &&
        item !== null;
}
