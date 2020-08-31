import { cabs } from 'models';

const attributes = ['id', 'regs_number'];

export const createCab = cab => cabs.create(cab);

export const findCab = cabId =>
    cabs.findOne({
        attributes: attributes,
        where: {
            id: cabId
        },
        underscoredAll: false
    });

export const findCabs = () =>
    cabs.findAll({ attributes: attributes, where: {} });

export const updateCab = (id, cab) => cabs.update(cab, { where: { id } });

export const deleteCab = id => {
    cabs.destroy({ where: { id } });
    return 'Success data with id: ' + `${id}`;
};
