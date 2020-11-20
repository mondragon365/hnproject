import { Repository, EntityRepository } from 'typeorm';
import { News } from './news.entity';

@EntityRepository(News)
export class NewsRepository extends Repository<News> { }