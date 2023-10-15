import esmock from 'esmock';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './block.ts';

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake(),
};

describe('Block', async () => {
    let Block;
    let ComponentMock: typeof BlockType;

    before(async () => {
        const { default: ImportenBlock } = await esmock('./block', {
            './event-bus.ts': {
                EventBus: class {
                    emit = eventBusMock.emit;

                    on = eventBusMock.on;
                }
            }
        }) as { default: typeof BlockType };

        Block = ImportenBlock;

        ComponentMock = class extends Block {};
    }) ;

    it('should fire init event on initialization',  () => {
        new ComponentMock({});

        expect(eventBusMock.emit.calledWith('init')).to.eq(true);
    });

    it('should fire CDU event on props update', () => {
        const component = new ComponentMock({});

        component.setProps({ test: 'test' });

        expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
    });

    it('may fire dispatchComponentDidMount method', () => {
        const component = new ComponentMock({});

        component.dispatchComponentDidMount();

        expect(eventBusMock.emit.calledWith('flow:component-did-mount')).to.eq(true);
    });
});
