import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://duy366110:A6XzLL3lblXeKH40@management.fr9ayxi.mongodb.net/ticket-store?retryWrites=true&w=majority'),
      ],
      controllers: [],
      providers: [],
      exports: [
        MongooseModule
      ]
})
export class DatabaseModule {}
