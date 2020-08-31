module.exports = {
    up: queryInterface => {
        const arr = [
            {
                id: 1,
                regs_number: 'MH12RW9966'
            },
            {
                id: 2,
                regs_number: 'MH12MH5008'
            }
        ];
        return queryInterface.bulkInsert('cabs', arr, {});
    },
    down: queryInterface => queryInterface.bulkDelete('cabs', null, {})
};
