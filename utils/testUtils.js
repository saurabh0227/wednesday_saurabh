import { users } from 'models';
import { init } from '../lib/testServer';
export function mockDB() {
    jest.doMock('models', () => {
        const SequelizeMock = require('sequelize-mock');
        const DBConnectionMock = new SequelizeMock();
        const userMock = DBConnectionMock.define('users', {
            id: 1,
            firstName: 'Sharan',
            lastName: 'Salian',
            email: 'sharan@wednesday.is',
            created_at: new Date(),
            updated_at: new Date()
        });
        userMock.findByPk = query => userMock.findById(query);
        return {
            users: userMock
        };
    });
}

export function cabMockDB() {
    jest.doMock('models', () => {
        const SequelizeMock = require('sequelize-mock');
        const DBConnectionMock = new SequelizeMock();
        const cabMock = DBConnectionMock.define('cabs', {
            id: 1,
            regsNumber: 'MH12MH5008',
            created_at: new Date(),
            updated_at: new Date()
        });
        return {
            cabs: cabMock
        };
    });
}

export function bookingMockDB() {
    jest.doMock('models', () => {
        const SequelizeMock = require('sequelize-mock');
        const DBConnectionMock = new SequelizeMock();
        const bookingMock = DBConnectionMock.define('bookings', {
            id: 1,
            cabId: 1,
            userId: 1,
            source: 'PCMC',
            destination: 'Bavdhan',
            created_at: new Date(),
            updated_at: new Date()
        });
        return {
            bookings: bookingMock
        };
    });
}

export function cabLocationsMockDB() {
    jest.doMock('models', () => {
        const SequelizeMock = require('sequelize-mock');
        const DBConnectionMock = new SequelizeMock();
        const cabLocationMock = DBConnectionMock.define('cabLocations', {
            id: 1,
            cabId: 1,
            latitude: '25.598361600000003',
            longitude: '85.131264',
            created_at: new Date(),
            updated_at: new Date()
        });
        return {
            bookings: cabLocationMock
        };
    });
}

export const bustDB = () => {
    users.sync({ force: true }); // this will clear all the entries in your table.
};

export const resetAndMockDB = async mockDBCallback => {
    jest.resetModules();
    mockDB(mockDBCallback);
    const server = await init();
    return server;
};
