import Handlebars, { HelperOptions } from 'handlebars';

import Block from './block';

export default function registerComponent(this: unknown, Component: typeof Block) {
    Handlebars.registerHelper(
        Component.componentName || Component.name,
        ({ hash, data, fn }: HelperOptions) => {
            if (!data.root.children) {
                data.root.children = {};
            }

            if (!data.root.refs) {
                data.root.refs = {};
            }

            const { children } = data.root;

            const component = new Component(hash);

            if (hash.ref) {
                data.root.refs[hash.ref] = component;
            }

            children[component.id] = component;

            const contents = fn ? fn(this) : '';
            console.log(data.root)

            return `<div data-id="id-${component.id}">${contents}</div>`;
        }
    );
}
