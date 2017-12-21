import { CatsController } from './cats.controller';
import { Module } from '@nestjs/common';
import { catsProviders } from './providers/cats.provider';
import { CatsService } from './services/cats.service';
import { DatabaseModule } from '../database/database.module';
import { SharedModule } from '../shared/shared.module';

@Module({
    modules: [
        DatabaseModule,
        SharedModule
    ],
    components: [
        ...catsProviders,
        CatsService
    ],
    controllers: [
        CatsController
    ]
})
export class CatsModule {}