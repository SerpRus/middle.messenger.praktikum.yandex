import Router, { BlockConstructable } from './router.ts';
import { expect } from 'chai';
import sinon from 'sinon';
import { beforeEach } from 'mocha';

describe('Router', () => {
    global.window.history.back = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };
    global.window.history.forward = () => {
        if (typeof window.onpopstate === 'function') {
            window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
        }
    };

    let getElementFake: sinon.SinonSpy<any[], HTMLDivElement>;
    let RouterInstance = Router;

    beforeEach(() => {
        RouterInstance = Router.reset();

        getElementFake = sinon.fake.returns(document.createElement('div'));
    });

    const BlockMock = class {
        getElement = getElementFake;
    } as unknown as BlockConstructable;

    it('use() should return Router instance', () => {
        const result = RouterInstance.use('/', BlockMock);

        expect(result).to.eq(RouterInstance);
    });

    it('should render a page on start', () => {
        console.log(RouterInstance);

        RouterInstance
            .use('/', BlockMock)
            .start();

        expect(getElementFake.callCount).to.eq(1);
    });

    describe('.back()', () => {
        it('should render a page on history back action', () => {
            RouterInstance
                .use('/', BlockMock)
                .start();

            RouterInstance.back();

            expect(getElementFake.callCount).to.eq(1);
        });
    });

    describe('.go()', () => {
        it('should render a new page', () => {
            RouterInstance
                .use('/', BlockMock)
                .use('/test', BlockMock)
                .start();

            RouterInstance.go('/test');
            RouterInstance.go('/');

            expect(getElementFake.callCount).to.eq(3);
        });
    });

    describe('.forward()', () => {
        it('should render a page on history forward action', () => {
            RouterInstance
                .use('/', BlockMock)
                .start();

            RouterInstance.forward();

            expect(getElementFake.callCount).to.eq(1);
        });
    });

    describe('.reset()', () => {
        it('should reset Router object', () => {
            RouterInstance
                .use('/', BlockMock)
                .start();

            const firstRouter = Router;
            const ResetRouter = RouterInstance.reset();
            expect(firstRouter).to.not.eq(ResetRouter);
        });
    });
});
