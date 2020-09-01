import {
    createBooking,
    updateBooking,
    findBooking,
    deleteBooking,
    findUserBookings,
    findNearestCabsForBookings
} from '../../lib/daos/bookingDao';
describe('cabs daos tests', () => {
    it('should return correct booking if id 1 is present', async () => {
        const booking = await findBooking({
            id: 1
        });
        expect(booking.id.id).toEqual(1);
    });

    it('should return correct of booking update with id 1', async () => {
        const booking = await updateBooking({
            id: 1
        });
        expect(booking[0]).toEqual(1);
    });
    it('should return correct of booking createBooking with id 1', async () => {
        const booking = await createBooking({
            id: 1
        });
        expect(booking.id).toEqual(1);
    });
    it('should return correct of delete booking with id 1', async () => {
        const booking = await deleteBooking({
            id: 1
        });
        expect(booking).toEqual(expect.any(String));
    });
    it('should return correct of user bookings', async () => {
        const booking = await findUserBookings({
            userId: 1
        });
        expect(booking.id.id).toEqual(1);
    });
    it('should return nearest cabs booking', async () => {
        const booking = await findNearestCabsForBookings();
        expect(booking.id.id).toEqual(1);
    });
});
