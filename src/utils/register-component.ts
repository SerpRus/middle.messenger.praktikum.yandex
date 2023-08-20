import Handlebars, { HelperOptions } from 'handlebars';

import Block from './block';

export default function registerComponent(this: unknown, Component: typeof Block) {
    Handlebars.registerHelper(
        Component.componentName || Component.name,
        ({ hash, data, fn }: HelperOptions) => {
            const component = new Component(hash);
            const dataAttribute = `data-id="${component.id}"`;

            if ('ref' in hash) {
                data.root.__refs[hash.ref] = component;
            }

            data.root.__children.push({
                component,
                embed(node: HTMLElement) {
                    const placeholder = node.querySelector('[data-id]');

                    if (!placeholder) {
                        throw new Error('Error!');
                    }

                    const element = component.element();
                    element.append(...Array.from(placeholder.childNodes));
                    placeholder.replaceWith(element);
                }
            });

            const contents = fn ? fn(this) : '';

            return `<div ${dataAttribute}>${contents}</div>`;
        }
    );
}
