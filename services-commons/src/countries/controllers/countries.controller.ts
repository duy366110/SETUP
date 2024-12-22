import { Controller, Get, Query } from '@nestjs/common';
import { CountriesService } from "../services/countries.service";
import { query } from 'express';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get()
    getAllCountries(
        @Query("fields") fields,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('sortBy') sortBy: string = "id",
        @Query('order') order: 'asc' | 'desc' = 'asc'
    ) {
        let fieldList = [];
        let sortList = [];

        if(fields && fields.trim()) {
            let fieldKeys = fields.split(',');
            if(fieldKeys.length) {
                fieldList.push(...fieldKeys);
            }
        }

        if(sortBy && sortBy.trim()) {
            let sortKeys = sortBy.split(',');
            if(sortKeys.length) {
                sortList.push(...sortKeys);
            }
        }

        return this.countriesService.getAllCountries(fieldList, page, limit, sortList, order);
    }
}
