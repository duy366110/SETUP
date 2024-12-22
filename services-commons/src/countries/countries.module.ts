import { Module } from '@nestjs/common';
import { CountriesService } from './services/countries.service';
import { CountriesController } from './controllers/countries.controller';

@Module({
  providers: [CountriesService],
  controllers: [CountriesController]
})
export class CountriesModule {}
