import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [
    TypeOrmModule.forRoot({
        type: 'mongodb',
        host: 'mongo',
        database: 'admin',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true
    }),
];