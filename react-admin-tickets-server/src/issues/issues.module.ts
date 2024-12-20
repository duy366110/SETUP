import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Issues, IssuesSchema } from "./issues.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Issues.name, schema: IssuesSchema }
    ]),
  ],
})
export class IssuesModule {}
