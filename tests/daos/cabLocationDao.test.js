import { createCabLocation } from '../../lib/daos/cabLocationDao';

describe('Cab location daos test', () => {
    it('should return correct of location createCabLocation with id 1', async () => {
        const location = await createCabLocation({
            cabId: 1
        });
        expect(location.id).toEqual(1);
    });
});
