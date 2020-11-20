import * as fs from 'fs';
import { parse } from 'dotenv';
import { request } from 'http';
import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsRepository } from '../modules/news/news.repository';
import { ReadResponseDto } from './dto/read-response.dto';
import { getConnection } from 'typeorm';
import { News } from '../modules/news/news.entity';
import { CreateHitDto } from './dto/create-hit.dto';

@Injectable()
export class RequestService {
    constructor(
        private httpService: HttpService
    ) { }

    getNews(): Observable<AxiosResponse<ReadResponseDto>> {
        return this.httpService.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
    }

    @Cron('10 * * * * *')
    async saveNews() {
        const newsRepository: NewsRepository = await getConnection().getRepository(News);
        this.getNews().subscribe((res) => {
            let result: AxiosResponse<ReadResponseDto> = res;
            result.data.hits.forEach(async function (hit: CreateHitDto) {
                hit.status = 'ACTIVE';
                const news: News = await newsRepository.findOne({ where: { objectID: hit.objectID } });
                if (!news) {
                    await newsRepository.save(hit);
                }
            });
        });

    }

}