import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { RequestModule } from './request/request.module';


@Module({
  imports: [ConfigModule, DatabaseModule, NewsModule, RequestModule, ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
