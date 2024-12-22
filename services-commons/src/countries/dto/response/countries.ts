import { ApiProperty } from '@nestjs/swagger';

import {
  IsOptional,
  IsString,
  IsArray,
  IsBoolean,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class NativeLanguageDto {
  @IsOptional()
  @IsString()
  official?: string;

  @IsOptional()
  @IsString()
  common?: string;
}

class NameDto {
  @IsOptional()
  @IsString()
  common?: string;

  @IsOptional()
  @IsString()
  official?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => NativeLanguageDto)
  native?: Record<string, NativeLanguageDto>;
}

class CurrencyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  symbol?: string;
}

class IddDto {
  @IsOptional()
  @IsString()
  root?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  suffixes?: string[];
}

class DemonymsDto {
  @IsOptional()
  @IsString()
  f?: string;

  @IsOptional()
  @IsString()
  m?: string;
}

class DemonymsLangDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => DemonymsDto)
  eng?: DemonymsDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => DemonymsDto)
  fra?: DemonymsDto;
}

class TranslationsDto {
  @IsOptional()
  @IsString()
  official?: string;

  @IsOptional()
  @IsString()
  common?: string;
}

export class CountryDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => NameDto)
  name?: NameDto;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tld?: string[];

  @IsOptional()
  @IsString()
  cca2?: string;

  @IsOptional()
  @IsString()
  ccn3?: string;

  @IsOptional()
  @IsString()
  cca3?: string;

  @IsOptional()
  @IsString()
  cioc?: string;

  @IsOptional()
  @IsBoolean()
  independent?: boolean;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsBoolean()
  unMember?: boolean;

  @IsOptional()
  @ValidateNested()
  @Type(() => CurrencyDto)
  currencies?: Record<string, CurrencyDto>;

  @IsOptional()
  @ValidateNested()
  @Type(() => IddDto)
  idd?: IddDto;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  capital?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  altSpellings?: string[];

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsString()
  subregion?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  languages?: Record<string, string>;

  @IsOptional()
  @ValidateNested()
  @Type(() => TranslationsDto)
  translations?: Record<string, TranslationsDto>;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  latlng?: number[];

  @IsOptional()
  @IsBoolean()
  landlocked?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  borders?: string[];

  @IsOptional()
  @IsNumber()
  area?: number;

  @IsOptional()
  @IsString()
  flag?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => DemonymsLangDto)
  demonyms?: DemonymsLangDto;
}

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


export class GetCountriesResponseDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  success?: boolean;

  @ApiProperty({ type: [CountryDto] })
  @IsArray()
  data?: CountryDto[];

  @ApiProperty({ type: PaginationDto })
  @Type(() => PaginationDto)
  pagination?: PaginationDto;
}
