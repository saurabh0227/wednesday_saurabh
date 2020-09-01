/* global server */
import { bookingMockDB } from 'utils/testUtils';

describe('as', () => {
    beforeAll(() => {
        bookingMockDB();
    });

    it('should return 200 GET', async () => {
        const res = await server.inject({
            method: 'GET',
            url: '/bookings/1'
        });
        expect(res.statusCode).toEqual(200);
    });

    it('should return 200 GET', async () => {
        const res = await server.inject({
            method: 'GET',
            url: '/bookings/userBookings/1'
        });
        expect(res.statusCode).toEqual(200);
    });

    it('should return 200 POST', async () => {
        const res = await server.inject({
            method: 'POST',
            url: '/bookings'
        });
        expect(res.statusCode).toEqual(200);
    });
    it('should return 200 DELETE', async () => {
        const res = await server.inject({
            method: 'DELETE',
            url: '/bookings/1'
        });
        expect(res.statusCode).toEqual(200);
    });
    it('should return 200 PUT', async () => {
        const res = await server.inject({
            method: 'PUT',
            url: '/bookings/1'
        });
        expect(res.statusCode).toEqual(200);
    });
    it('should return 200 GET', async () => {
        const res = await server.inject({
            method: 'GET',
            url: '/bookings/nearestCabs'
        });
        expect(res.statusCode).toEqual(200);
    });
});
