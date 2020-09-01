module.exports = {
    up: queryInterface => {
        const arr = [
            {
                cab_id: 1,
                latitude: '25.598361600000004',
                longitude: '85.131264'
            }
        ];
        return queryInterface.bulkInsert('cabLocations', arr, {});
    },
    down: queryInterface => queryInterface.bulkDelete('cabLocations', null, {})
};
