import { bookings, cabLocations } from 'models';

const attributes = ['id', 'cab_id', 'user_id', 'source', 'destination'];

export const createBooking = booking => bookings.create(booking);

export const findBooking = bookingId =>
    bookings.findOne({
        attributes: attributes,
        where: {
            id: bookingId
        },
        underscoredAll: false
    });

export const findUserBookings = userId =>
    bookings.findAll({
        attributes: attributes,
        where: { userId: userId }
    });

export const updateBooking = (id, booking) =>
    bookings.update(booking, { where: { id } });

export const deleteBooking = id => {
    bookings.destroy({ where: { id } });
    return 'Success data with id: ' + `${id}`;
};

export const findNearestCabsForBookings = async () => {
    try {
        const cabs = await cabLocations.findAll({
            attributes: ['id', 'cab_id', 'latitude', 'longitude'],
            where: {}
        });
        return cabs;
    } catch (error) {
        return error;
    }
};
