import { createCabLocation } from 'daos/cabLocationDao';

module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: request => {
            const cabLocation = request.payload;
            const cabLocationDetails = createCabLocation(cabLocation)
                .then(cabLocation => cabLocation)
                .catch(err => {
                    console.log(`In route cablocations error -> ${err}`);
                    return err;
                });
            return cabLocationDetails;
        }
    }
];
