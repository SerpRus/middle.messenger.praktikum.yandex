import Action, { Link, PopupButton, DropdownButton } from './action.ts';
import { expect } from 'chai';
import Router from '../../utils/router.ts';
import sinon from 'sinon';
import eventBus from '../../utils/event-bus.ts';

describe('Action', () => {
    it('should render', () => {
        new Action({ text: 'test' });
    });

    it('must have tag button', () => {
        const { tagName }  = new Action({
            text: 'test'
        }).getElement();

        expect(tagName).to.eq('BUTTON');
    });

    it('must have text', () => {
        const action = new Action({
            text: 'test'
        }).getElement();
        const { innerHTML } = action.querySelector('.action__text') as HTMLElement;

        expect(innerHTML.trim()).to.eq('test');
    });

    it('may have a classes', () => {
        const { className } = new Action({
            classes: 'test-class',
            text: 'test'
        }).getElement();

        expect(className.includes('test-class')).to.eq(true);
    });

    it('may have a themaType', () => {
        const { className } = new Action({
            themaType: 'test-thema-type',
            text: 'test' }
        ).getElement();

        expect(className.includes('action--test-thema-type')).to.eq(true);
    });

    it('may have a thema', () => {
        const { className } = new Action({
            thema: 'test-thema',
            text: 'test' }
        ).getElement();

        expect(className.includes('action--test-thema')).to.eq(true);
    });

    it('may have a click event', () => {
        const fake = sinon.fake();
        const action = new Action({
            onClick() {
                fake();
            },
            text: 'test' }
        );
        const element = action.getElement();

        element.click();
        element.click();

        expect(fake.callCount).to.eq(2);
    });

    describe('Link', () => {
        after(() => {
            Router.go('/');
        });

        it('must have tag a', () => {
            const { tagName } = new Link({
                href: 'test-href',
                text: 'test'
            }).getElement();

            expect(tagName).to.eq('A');
        });

        it('must have text', () => {
            const action = new Link({
                href: 'test-href-3',
                text: 'test'
            }).getElement();
            const { innerHTML } = action.querySelector('.action__text') as HTMLElement;

            expect(innerHTML.trim()).to.eq('test');
        });

        it('must have href attribute', () => {
            const { href } = new Link({
                href: 'test-href-2',
                text: 'test'
            }).getElement() as HTMLLinkElement;

            expect(href).to.eq('test-href-2');
        });

        it('may have a classes', () => {
            const { className } = new Link({
                classes: 'test-class',
                href: 'test-href-4',
                text: 'test'
            }).getElement();

            expect(className.includes('test-class')).to.eq(true);
        });

        it('may have a themaType', () => {
            const { className } = new Link({
                themaType: 'test-thema-type',
                href: 'test-href-5',
                text: 'test' }
            ).getElement();

            expect(className.includes('action--test-thema-type')).to.eq(true);
        });

        it('may have a thema', () => {
            const { className } = new Action({
                thema: 'test-thema',
                href: 'test-href-6',
                text: 'test' }
            ).getElement();

            expect(className.includes('action--test-thema')).to.eq(true);
        });

        it('should go to passed route on click', () => {
            const element = new Link({
                href: 'test-href-7',
                text: 'test'
            }).getElement() as HTMLLinkElement;
            const spy = sinon.spy(Router, 'go');

            element.click();

            expect(spy.calledOnce).to.eq(true);
        });
    });

    describe('PopupButton', () => {
        it('must have modalId', () => {
            let fake;
            eventBus.on('open-popup', (modalId) => {
                fake = sinon.fake.returns(modalId);
            });
            const element = new PopupButton({
                modalId: 'test-modalId',
                text: 'test'
            }).getElement();

            element.click();

            expect(fake!()).to.eq('test-modalId');
        });

        it('click must trigger event open-popup', () => {
            const fake = sinon.fake();
            eventBus.on('open-popup', () => {
                fake();
            });
            const element = new PopupButton({
                modalId: 'test-modalId-click',
                text: 'test'
            }).getElement();

            element.click();

            expect(fake.callCount).to.eq(1);
        });
    });

    describe('DropdownButton', () => {
        it('must have dropdownId', () => {
            let fake;
            eventBus.on('open-dropdown', ({ id }) => {
                fake = sinon.fake.returns(id);
            });
            const element = new DropdownButton({
                dropdownId: 'test-dropdownId',
                text: 'test'
            }).getElement();

            element.click();

            expect(fake!()).to.eq('test-dropdownId');
        });

        it('click must trigger event open-dropdown', () => {
            const fake = sinon.fake();
            eventBus.on('open-dropdown', () => {
                fake();
            });
            const element = new DropdownButton({
                dropdownId: 'test-dropdownId-click',
                text: 'test'
            }).getElement();

            element.click();

            expect(fake.callCount).to.eq(1);
        });
    });
});
