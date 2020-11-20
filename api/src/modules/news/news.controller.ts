import { Controller, Get, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { ReadNewsDto } from './dtos';

@Controller('news')
export class NewsController {
    constructor(private readonly _newsService: NewsService) {
    }

    @Get()
    async getNewss(): Promise<ReadNewsDto[]> {
        const data = await this._newsService.getAll();
        return data;
    }

    @Delete(':id')
    async deleteNews(@Param('id') id: number) {
        await this._newsService.delete(id);
        return true;
    }
}
