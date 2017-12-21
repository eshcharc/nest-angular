import { createConnection, ConnectionOptions } from 'typeorm';
const config = require('../../../ormconfig.js');

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await createConnection(config)
  }
];