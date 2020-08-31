import {
    createCab,
    updateCab,
    findCab,
    deleteCab,
    findCabs
} from '../../lib/daos/cabDao';
describe('cabs daos tests', () => {
    it('should return correct cab if id 1 is present', async () => {
        const cab = await findCab({
            id: 1
        });
        expect(cab.id.id).toEqual(1);
    });

    it('should return correct of cab update with id 1', async () => {
        const cab = await updateCab({
            id: 1
        });
        expect(cab[0]).toEqual(1);
    });
    it('should return correct of cab createCab with id 1', async () => {
        const cab = await createCab({
            id: 1
        });
        expect(cab.id).toEqual(1);
    });
    it('should return correct of delete cab with id 1', async () => {
        const cab = await deleteCab({
            id: 1
        });
        expect(cab).toEqual(expect.any(String));
    });
    it('should return correct of find Cabs', async () => {
        const cab = await findCabs();
        expect(cab).toEqual(1);
    });
});
