import { TypeOrmModule } from '@nestjs/typeorm';

export const databaseProviders = [
    TypeOrmModule.forRoot({
        type: 'mongodb',
        host: 'localhost',
        database: 'newss',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true
    }),
];