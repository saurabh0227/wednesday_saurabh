import Hapi from '@hapi/hapi';
import path from 'path';
import wurst from 'wurst';
import serverConfig from 'config/server';
import models from 'models';
import mapKeysDeep from 'map-keys-deep';
import { camelCase, snakeCase } from 'lodash';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';

const prepDatabase = async () => {
    await models.sequelize
        .authenticate()
        .then(() => {
            // eslint-disable-next-line no-console
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            // eslint-disable-next-line no-console
            console.error('Unable to connect to the database:', err);
        });
};

const initServer = async () => {
    const server = Hapi.server(serverConfig);

    // Swagger configuration
    const swaggerOptions = {
        info: {
            title: 'API Documentation',
            version: '14.0.0'
        }
    };
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    // Register Wurst plugin
    await server.register({
        plugin: wurst,
        options: {
            routes: '**/routes.js',
            cwd: path.join(__dirname, 'lib/routes'),
            log: true
        }
    });

    await server.start();

    const onPreHandler = function(request, h) {
        const requestQueryParams = request.query;
        const requestPayload = request.payload;
        request.query = mapKeysDeep(requestQueryParams, keys =>
            camelCase(keys)
        );
        request.payload = mapKeysDeep(requestPayload, keys => camelCase(keys));
        return h.continue;
    };

    const onPreResponse = function(request, h) {
        const response = request.response;
        const responseSource = response.source;
        response.source = mapKeysDeep(responseSource, keys => snakeCase(keys));
        return h.continue;
    };

    server.ext('onPreHandler', onPreHandler);
    server.ext('onPreResponse', onPreResponse);

    // eslint-disable-next-line no-console
    console.log('Server running on %s', server.info.uri);

    return true;
};

process.on('unhandledRejection', err => {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
});

prepDatabase().then(
    () => {
        // eslint-disable-next-line no-console
        console.log(
            `Database connection to ${
                process.env.DB_URI
            } is successful.\nThe following options were applied: ${JSON.stringify(
                process.env.DB_OPTIONS
            )}`
        );
        // eslint-disable-next-line no-console
        console.log(`Initializing the server...`);

        return initServer();
    },
    error => {
        // eslint-disable-next-line no-console
        console.error(error, `Server startup failed...`);
    }
);
