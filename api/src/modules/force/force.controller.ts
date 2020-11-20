import { Controller, Get } from '@nestjs/common';
import { RequestService } from '../../request/request.service';

@Controller('force')
export class ForceController {
    constructor(private readonly _requestService: RequestService) {
    }

    @Get()
    async force(): Promise<string> {
        await this._requestService.saveNews();
        return "data charged";
    }    
}
