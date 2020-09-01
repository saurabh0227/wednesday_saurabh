import {
    createBooking,
    findBooking,
    findUserBookings,
    updateBooking,
    deleteBooking,
    findNearestCabsForBookings
} from 'daos/bookingDao';
import { notFound } from 'utils/responseInterceptors';

module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: request => {
            const booking = request.payload;
            console.log(`In route bookings -> ${booking}`);
            const bookingDetails = createBooking(booking)
                .then(booking => booking)
                .catch(err => err);
            return bookingDetails;
        }
    },
    {
        method: 'GET',
        path: '/{bookingId}',
        handler: async request => {
            const bookingId = request.params.bookingId;
            const booking = await findBooking(bookingId);
            if (!booking) {
                return notFound('Error in geeting booking');
            }
            return booking;
        }
    },
    {
        method: 'GET',
        path: '/userBookings/{userId}',
        handler: async request => {
            const userId = request.params.userId;
            const bookings = await findUserBookings(userId);
            if (bookings.length === 0) {
                return notFound('No booking found for this user');
            }
            return bookings;
        }
    },
    {
        method: 'PUT',
        path: '/{bookingId}',
        handler: request => {
            const bookingId = request.params.bookingId;
            const booking = request.payload;
            return updateBooking(bookingId, booking)
                .then(() => findBooking(bookingId))
                .catch(err => err);
        }
    },
    {
        method: 'DELETE',
        path: '/{bookingId}',
        handler: request => {
            const bookingId = request.params.bookingId;
            return deleteBooking(bookingId);
        }
    },
    {
        method: 'GET',
        path: '/nearestCabs',
        handler: async request => {
            const cabs = await findNearestCabsForBookings();
            if (!cabs) {
                return notFound('No cabs found in your area!');
            }
            return cabs;
        }
    }
];
