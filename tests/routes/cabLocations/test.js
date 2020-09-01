import { cabLocationsMockDB } from 'utils/testUtils';

describe('as', () => {
    beforeAll(() => {
        cabLocationsMockDB();
    });
    it('should return 200 POST', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/cabLocations'
        });
        expect(res.statusCode).toEqual(200);
    });
});
