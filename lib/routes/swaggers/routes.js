import fs from 'fs';
import util from 'util';
import path from 'path';

const file = path.resolve(__dirname, './docs.json');
const readFileAsync = util.promisify(fs.readFile);

module.exports = [
    {
        method: 'GET',
        path: '/',
        options: {
            description: 'Get API list',
            notes: 'Returns an array of api docs',
            tags: ['api'],
            handler: async (request, h) => {
                const apis = await readFileAsync(file, 'utf-8');
                return h.response(JSON.parse(apis));
            }
        }
    }
];
