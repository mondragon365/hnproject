import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestModule } from 'src/request/request.module';
import { ForceController } from '../force/force.controller';

@Module({
    imports: [RequestModule],
    providers: [],
    controllers: [ForceController]
})
export class ForceModule { }
