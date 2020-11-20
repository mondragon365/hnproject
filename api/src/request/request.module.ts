import { Module, HttpModule } from '@nestjs/common';
import { RequestService } from './request.service';
import { NewsModule } from '../modules/news/news.module';

@Module({
    imports: [HttpModule.register({
        timeout: 50000,
        maxRedirects: 5,
    }), NewsModule],
    providers: [RequestService],
    exports: [RequestService]
})
export class RequestModule { }
