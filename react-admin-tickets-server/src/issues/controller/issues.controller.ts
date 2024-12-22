import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('issues')
@Controller('issues')
export class IssuesController {

    @Get()
    @ApiOperation({ summary: 'Get all issues' })
    getIssue(): string {
        return 'Hello World!';
    }

}
