import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import HTTPTransport from './http-transport.ts';
import { expect } from 'chai';


describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    let requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        global.XMLHttpRequest = xhr;

        xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
            requests.push(request);
        });

        instance = new HTTPTransport('/auth');
    });

    afterEach(() => {
        requests = [];
    });

    describe('GET', () => {
        it('.get() should send GET request', () => {
            instance.get('/user');
            const [request] = requests;

            expect(request.method).to.eq('Get');
        });

        it('.get() should send GET request with query string', () => {
            instance.get('/user', { a: 'a', b: 'b' });
            const [request] = requests;

            expect(request.url).to.contain( '?a=a&b=b');
        });
    });

    describe('POST', () => {
        it('.post() should send POST request', () => {
            instance.post('/user');
            const [request] = requests;

            expect(request.method).to.eq('Post');
        });

        it('.post() may have requestBody', () => {
            instance.post('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.requestBody).to.eq('{"title":"test"}');
        });

        it('.post() may have FormData in requestBody', () => {
            const formData = new FormData();

            instance.post('/user', formData);
            const [request] = requests;

            expect(request.requestBody as Object instanceof FormData).to.eq(true);
        });
    });

    describe('PUT', () => {
        it('.put() should send PUT request', () => {
            instance.put('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.method).to.eq('Put');
        });

        it('.put() should have requestBody', () => {
            instance.put('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.requestBody).to.eq('{"title":"test"}');
        });

        it('.put() may have FormData in requestBody', () => {
            const formData = new FormData();

            instance.put('/user', formData);
            const [request] = requests;

            expect(request.requestBody as Object instanceof FormData).to.eq(true);
        });
    });

    describe('PATCH', () => {
        it('.patch() should send PATCH request', () => {
            instance.patch('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.method).to.eq('Patch');
        });

        it('.patch() should have requestBody', () => {
            instance.patch('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.requestBody).to.eq('{"title":"test"}');
        });

        it('.patch() may have FormData in requestBody', () => {
            const formData = new FormData();

            instance.patch('/user', formData);
            const [request] = requests;

            expect(request.requestBody as Object instanceof FormData).to.eq(true);
        });
    });

    describe('DELETE', () => {
        it('.delete() should send DELETE request', () => {
            instance.delete('/user');
            const [request] = requests;

            expect(request.method).to.eq('Delete');
        });

        it('.delete() may have requestBody', () => {
            instance.delete('/user', {
                title: 'test',
            });
            const [request] = requests;

            expect(request.requestBody).to.eq('{"title":"test"}');
        });

        it('.delete() may have FormData in requestBody', () => {
            const formData = new FormData();

            instance.delete('/user', formData);
            const [request] = requests;

            expect(request.requestBody as Object instanceof FormData).to.eq(true);
        });
    });
});
