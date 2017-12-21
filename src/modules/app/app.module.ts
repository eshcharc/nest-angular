import { CatsModule } from './../cats/cats.module';
import { Module } from '@nestjs/common';

@Module({
    modules: [
        CatsModule
    ]
})
export class ApplicationModule {}