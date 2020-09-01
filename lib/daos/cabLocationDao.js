import { cabLocations } from 'models';

const attributes = ['id', 'cab_id', 'latitude', 'longitude'];

export const createCabLocation = async cabLocation => {
    const bodyString = JSON.stringify(cabLocation);
    const body = JSON.parse(bodyString);
    const locationData = await findCabLocation(body.cabId);
    if (!locationData) {
        return await cabLocations.create(cabLocation);
    } else {
        const locationData = cabLocation;
        delete locationData.id;
        await updateCabLocation(cabLocation.cabId, locationData);
        return { message: `Cab location updated for cabId: ${body.cabId}` };
    }
};

const findCabLocation = async cabId => {
    try {
        return await cabLocations.findOne({
            attributes: attributes,
            where: { cabId: cabId }
        });
    } catch (error) {
        return error;
    }
};

const updateCabLocation = async (cabId, booking) => {
    try {
        return await cabLocations.update(booking, { where: { cabId: cabId } });
    } catch (error) {
        return error;
    }
};
