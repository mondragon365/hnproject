import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { NewsRepository } from './news.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ReadNewsDto } from './dtos';
import { plainToClass } from 'class-transformer';
import { status } from '../../shared/entity-status.enum';

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(NewsRepository)
        private readonly _newsRepository: NewsRepository,
    ) {
    }

    async getAll(): Promise<ReadNewsDto[]> {
        const news = await this._newsRepository.find({ where: { status: status.ACTIVE } });
        const sortedNews = news.sort((a, b) => {
            if (a.created_at_i > b.created_at_i) return -1;
            if (a.created_at_i < b.created_at_i) return 1;
        });
        return sortedNews.map((item) => plainToClass(ReadNewsDto, item, { strategy: 'excludeAll', enableImplicitConversion: true }));
    }

    async delete(id: number): Promise<void> {
        const news = await this._newsRepository.findOne({ where: { status: status.ACTIVE, objectID: id } });
        if (!news) {
            throw new NotFoundException();
        }
        news.status = status.INACTIVE;
        await this._newsRepository.save(news);
    }
}
