import { Module } from '@nestjs/common';
import { CountryService } from './services/country.service';
import { CountriesService } from './services/countries.service';
import { CountriesController } from './controllers/countries.controller';

@Module({
  providers: [CountryService, CountriesService],
  controllers: [CountriesController],
})
export class CountriesModule {}
