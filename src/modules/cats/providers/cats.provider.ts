import { Connection, Repository } from 'typeorm';
import { Cat } from '../models/cat.model';

export const catsProviders = [
  {
    provide: 'CatRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Cat),
    inject: ['DbConnectionToken']
  }
];