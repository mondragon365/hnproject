import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsRepository } from '../news/news.repository';
import { NewsService } from '../news/news.service';
import { NewsController } from '../news/news.controller';

@Module({
    imports: [TypeOrmModule.forFeature([NewsRepository])],
    providers: [NewsService],
    controllers: [NewsController]
})
export class NewsModule { }
