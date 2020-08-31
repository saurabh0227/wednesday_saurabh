/* global server */
import { cabMockDB } from 'utils/testUtils';

describe('as', () => {
    beforeAll(() => {
        cabMockDB();
    });

    it('should return 200 GET', async () => {
        const res = await server.inject({
            method: 'GET',
            url: '/cabs/1'
        });
        expect(res.statusCode).toEqual(200);
    });

    it('should return 200 GET', async () => {
        const res = await server.inject({
            method: 'GET',
            url: '/cabs'
        });
        expect(res.statusCode).toEqual(200);
    });

    it('should return 200 POST', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/cabs'
        });
        expect(res.statusCode).toEqual(200);
    });
    it('should return 200 DELETE', async () => {
        const res = await server.inject({
            method: 'DELETE',
            url: '/cabs/1'
        });
        expect(res.statusCode).toEqual(200);
    });
    it('should return 200 PUT', async () => {
        const res = await server.inject({
            method: 'PUT',
            url: '/cabs/1'
        });
        expect(res.statusCode).toEqual(200);
    });
});
