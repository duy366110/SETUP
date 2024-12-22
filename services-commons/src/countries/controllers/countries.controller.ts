import { Controller, Get, Param, Query } from '@nestjs/common';
import { CountriesService } from '../services/countries.service';
import {
  ApiOperation,
  ApiOkResponse,
  ApiTags,
  ApiQuery,
} from '@nestjs/swagger';
import { Country } from "../countries.type";
import { ResponseCountryDto } from "../dto/response/response.country";
import { ResponseCountryManyDto } from "../dto/response/response.country.getmany";

@Controller('countries')
@ApiTags('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @ApiOperation({
    summary: 'Get all countries',
    description: `This endpoint retrieves a paginated list of countries. 
        You can customize the response by specifying query parameters such as fields, page, limit, sortBy, and order.`,
  })
  @ApiOkResponse({
    description: 'Successfully fetched all countries.',
    type: ResponseCountryManyDto,
  })
  @ApiQuery({
    name: 'fields',
    required: false,
    type: String,
    example: 'id,name,code',
    description: 'Comma-separated list of fields to include in the response',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
    description: 'Page number for pagination (default: 1)',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
    description: 'Number of records per page (default: 10)',
  })
  @ApiQuery({
    name: 'sortBy',
    required: false,
    type: String,
    example: 'id',
    description: 'Field to sort by (default: id)',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    type: String,
    enum: ['asc', 'desc'],
    example: 'asc',
    description: 'Sort order: asc or desc (default: asc)',
  })
  getCountries(
    @Query('fields') fields,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('sortBy') sortBy: string = 'id',
    @Query('order') order: 'asc' | 'desc' = 'asc',
  ): ResponseCountryManyDto {
    let fieldList = [];
    let sortList = [];

    if (fields && fields.trim()) {
      let fieldKeys = fields.split(',');
      if (fieldKeys.length) {
        fieldList.push(...fieldKeys);
      }
    }

    if (sortBy && sortBy.trim()) {
      let sortKeys = sortBy.split(',');
      if (sortKeys.length) {
        sortList.push(...sortKeys);
      }
    }

    let result = this.countriesService.getAllCountries(fieldList, page, limit, sortList, order,);

    let metadata: ResponseCountryManyDto = {
      success: true,
      data: result.data,
      pagination: result.pagination,
    };

    return metadata;
  }

  @Get(":id")
  @ApiOperation({
    summary: 'Retrieve country information by ID',
    description: `
          This endpoint allows the client to fetch detailed information about a country using its unique identifier (ID). 
          The returned data includes key attributes such as the country's name, population, and any other relevant details.
        `,
  })
  getCountryById(@Param('id') id: string): {success: boolean, data: ResponseCountryDto} {

    let country: Country = this.countriesService.getCountryById(id);
    let data:ResponseCountryDto = {...country};

    return {
        success: true,
        data
    }
  }
}
