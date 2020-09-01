import { cabLocations } from 'models';

const attributes = ['id', 'cab_id', 'latitude', 'longitude'];

export const createCabLocation = async cabLocation => {
    const bodyString = JSON.stringify(cabLocation);
    const body = JSON.parse(bodyString);
    const locationData = await findCabLocation(body.cabId);
    console.log(`In daos createCabLocation locationData -> ${locationData}`);
    if (!locationData) {
        cabLocations.create(cabLocation);
    } else {
        const locationData = cabLocation;
        delete locationData.id;
        await updateCabLocation(cabLocation.cabId, locationData);
    }
};

const findCabLocation = async cabId => {
    await cabLocations.findOne({
        attributes: attributes,
        where: { cabId: cabId }
    });
};

const updateCabLocation = async (cabId, booking) =>
    await cabLocations.update(booking, { where: { cabId: cabId } });
