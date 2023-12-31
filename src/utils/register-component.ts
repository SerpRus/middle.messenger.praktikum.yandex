import Handlebars, { HelperOptions } from 'handlebars';

import Block from './block';

export default function registerComponent(Component: typeof Block) {
    const { componentName } = Component;

    if (componentName in Handlebars.helpers) {
        console.error(`The ${componentName} component is already registered!`);
    }

    Handlebars.registerHelper(
        componentName,
        function (this: unknown, { hash, data, fn }: HelperOptions) {
            const component = new Component(hash);
            const dataAttribute = `data-id="${component.id}"`;

            if ('ref' in hash) {
                (data.root.__refs = data.root.__refs || {})[hash.ref] = component;
            }

            (data.root.__children = data.root.__children || []).push({
                component,
                embed(fragment: DocumentFragment) {
                    const stub = fragment.querySelector(`[${dataAttribute}]`);

                    if (!stub) {
                        return;
                    }

                    component.getElement()?.append(...Array.from(stub.childNodes));

                    stub.replaceWith(component.getElement()!);
                }
            });

            const contents = fn ? fn(this) : '';

            return `<div ${dataAttribute}>${contents}</div>`;
        }
    );
}
