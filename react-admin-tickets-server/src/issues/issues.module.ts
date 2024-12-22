import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Issues, IssuesSchema } from "./issues.schema";
import { IssuesController } from './controller/issues.controller';
import { IssueService } from './services/issue/issue.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Issues.name, schema: IssuesSchema }
    ]),
  ],
  controllers: [IssuesController],
  providers: [IssueService],
})
export class IssuesModule {}
