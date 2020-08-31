module.exports = {
    up: queryInterface => {
        const arr = [
            {
                cab_id: 1,
                user_id: 1,
                source: 'kk colony',
                destination: 'sector 12'
            },
            {
                cab_id: 1,
                user_id: 1,
                source: 'PCMC',
                destination: 'Bavdhan'
            }
        ];
        return queryInterface.bulkInsert('bookings', arr, {});
    },
    down: queryInterface => queryInterface.bulkDelete('bookings', null, {})
};
