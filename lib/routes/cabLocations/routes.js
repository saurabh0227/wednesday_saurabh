import { createCabLocation } from 'daos/cabLocationDao';

module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: request => {
            const cabLocation = request.payload;
            console.log(`In route cablocations -> ${cabLocation}`);
            const cabLocationDetails = createCabLocation(cabLocation)
                .then(cabLocation => {
                    console.log(
                        `In route cablocations cabLocation -> ${cabLocation}`
                    );
                    return cabLocation;
                })
                .catch(err => {
                    console.log(`In route cablocations error -> ${err}`);
                    return err;
                });
            return cabLocationDetails;
        }
    }
];
