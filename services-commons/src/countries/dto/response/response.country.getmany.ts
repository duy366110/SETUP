import { ApiProperty } from '@nestjs/swagger';

import {
  IsArray,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ResponseCountryDto } from "./response.country";

export class PaginationDto {
  @ApiProperty({ example: 250, description: 'Total number of items.' })
  total: number;

  @ApiProperty({ example: 25, description: 'Total number of pages.' })
  totalPages: number;

  @ApiProperty({ example: 1, description: 'Current page number.' })
  currentPage: number;

  @ApiProperty({ example: 10, description: 'Number of items per page.' })
  limit: number;
}


export class ResponseCountryManyDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  success?: boolean;

  @ApiProperty({ type: [ResponseCountryDto] })
  @IsArray()
  data?: ResponseCountryDto[];

  @ApiProperty({ type: PaginationDto })
  @Type(() => PaginationDto)
  pagination?: PaginationDto;
}