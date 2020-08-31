import {
    createCab,
    findCab,
    findCabs,
    updateCab,
    deleteCab
} from 'daos/cabDao';
import { notFound } from 'utils/responseInterceptors';

module.exports = [
    {
        method: 'POST',
        path: '/',
        handler: request => {
            const cab = request.payload;
            const cabDetails = createCab(cab)
                .then(cab => cab)
                .catch(err => err);
            return cabDetails;
        }
    },
    {
        method: 'GET',
        path: '/{cabId}',
        handler: async request => {
            const cabId = request.params.cabId;
            const cab = await findCab(cabId);
            if (!cab) {
                return notFound('Cab does not exist');
            }
            return cab;
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: async request => {
            const cabs = await findCabs();
            if (cabs.length === 0) {
                return notFound('No cabs found');
            }
            return cabs;
        }
    },
    {
        method: 'PUT',
        path: '/{cabId}',
        handler: request => {
            const cabId = request.params.cabId;
            const cab = request.payload;
            return updateCab(cabId, cab)
                .then(() => findCab(cabId))
                .catch(err => err);
        }
    },
    {
        method: 'DELETE',
        path: '/{cabId}',
        handler: request => {
            const cabId = request.params.cabId;
            return deleteCab(cabId);
        }
    }
];
