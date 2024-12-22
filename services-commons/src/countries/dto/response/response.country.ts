import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import {
  IsOptional,
  IsString,
  IsArray,
  IsBoolean,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class OfficialAndCommonDto {
  @IsOptional()
  @IsString()
  common?: string;

  @IsOptional()
  @IsString()
  official?: string;
}

export class CountryNameDto extends OfficialAndCommonDto {
  @ApiPropertyOptional({
    description: 'Native names of the country, organized by language codes.',
    example: {
      vi: {
        common: 'Việt Nam',
        official: 'Cộng hòa xã hội chủ nghĩa Việt Nam',
      },
      en: { common: 'Vietnam', official: 'Socialist Republic of Vietnam' },
    },
  })
  @IsOptional()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => OfficialAndCommonDto)
  native?: { [languageCode: string]: OfficialAndCommonDto };
}

export class CurrencyDto {
  @ApiPropertyOptional({
    description: 'The name of the currency.',
    example: 'United States Dollar',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'The symbol of the currency.',
    example: '$',
  })
  @IsOptional()
  @IsString()
  symbol?: string;
}

export class IntlDirectDialingCodeDto {
  @ApiPropertyOptional({
    description: 'The root dialing code for international direct dialing.',
    example: '+1',
  })
  @IsOptional()
  @IsString()
  root?: string;

  @ApiPropertyOptional({
    description: 'List of suffixes for the international dialing code.',
    example: ['408', '415'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  suffixes?: string[];
}

export class DemonymsDto {
  @ApiPropertyOptional({
    description: 'The female demonym for the country.',
    example: 'Vietnamese',
  })
  @IsOptional()
  @IsString()
  f?: string;

  @ApiPropertyOptional({
    description: 'The male demonym for the country.',
    example: 'Vietnamese',
  })
  @IsOptional()
  @IsString()
  m?: string;
}

export class ResponseCountryDto {
  @ApiPropertyOptional({
    description: 'Name information for the country.',
    type: CountryNameDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => CountryNameDto)
  name?: CountryNameDto;

  @ApiPropertyOptional({
    description: 'Top-level domain(s) associated with the country.',
    example: ['.vn'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tld?: string[];

  @ApiPropertyOptional({
    description: 'Two-letter country code.',
    example: 'VN',
  })
  @IsOptional()
  @IsString()
  cca2?: string;

  @ApiPropertyOptional({
    description: 'Numeric country code.',
    example: '704',
  })
  @IsOptional()
  @IsString()
  ccn3?: string;

  @ApiPropertyOptional({
    description: 'Three-letter country code.',
    example: 'VNM',
  })
  @IsOptional()
  @IsString()
  cca3?: string;

  @ApiPropertyOptional({
    description: 'International Olympic Committee country code.',
    example: 'VNM',
  })
  @IsOptional()
  @IsString()
  cioc?: string;

  @ApiPropertyOptional({
    description: 'Whether the country is independent.',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  independent?: boolean;

  @ApiPropertyOptional({
    description: 'Status of the country (e.g., "UN member").',
    example: 'UN member',
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({
    description: 'Currencies used by the country.',
  })
  @IsOptional()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => CurrencyDto)
  currencies?: { [currencyCode: string]: CurrencyDto };

  @ApiPropertyOptional({
    description: 'International dialing code.',
    type: IntlDirectDialingCodeDto,
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => IntlDirectDialingCodeDto)
  idd?: IntlDirectDialingCodeDto;

  @ApiPropertyOptional({
    description: 'Capital city(ies) of the country.',
    example: ['Hanoi'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  capital?: string[];

  @ApiPropertyOptional({
    description: 'Alternative spellings of the country name.',
    example: ['Vietnam'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  altSpellings?: string[];

  @ApiPropertyOptional({
    description: 'Region of the country.',
    example: 'Asia',
  })
  @IsOptional()
  @IsString()
  region?: string;

  @ApiPropertyOptional({
    description: 'Subregion of the country.',
    example: 'Southeast Asia',
  })
  @IsOptional()
  @IsString()
  subregion?: string;

  @ApiPropertyOptional({
    description: 'Languages spoken in the country.',
    example: { vi: 'Vietnamese', en: 'English' },
  })
  @IsOptional()
  @IsObject()
  languages?: { [languageCode: string]: string };

  @ApiPropertyOptional({
    description: 'Country translations in different languages.',
    example: {
      en: { common: 'Vietnam', official: 'Socialist Republic of Vietnam' },
    },
  })
  @IsOptional()
  @IsObject()
  translations?: { [languageCode: string]: OfficialAndCommonDto };

  @ApiPropertyOptional({
    description: 'Geographical coordinates (latitude, longitude).',
    example: [14.0583, 108.2772],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  latlng?: [number, number];

  @ApiPropertyOptional({
    description: 'Demonyms for the country by language.',
  })
  @IsOptional()
  @IsObject()
  @ValidateNested({ each: true })
  @Type(() => DemonymsDto)
  demonyms?: { [languageCode: string]: DemonymsDto };

  @ApiPropertyOptional({
    description: 'Whether the country is landlocked.',
    example: false,
  })
  @IsOptional()
  @IsBoolean()
  landlocked?: boolean;

  @ApiPropertyOptional({
    description: 'Country border information (if any).',
    example: ['CAM', 'LAO', 'CHN'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  borders?: string[];

  @ApiPropertyOptional({
    description: 'Area of the country in square kilometers.',
    example: 331212,
  })
  @IsOptional()
  @IsNumber()
  area?: number;

  @ApiPropertyOptional({
    description: 'Flag URL or image representation.',
    example: 'https://flagcdn.com/vn.svg',
  })
  @IsOptional()
  @IsString()
  flag?: string;

  @ApiPropertyOptional({
    description: 'Unique identifier for the country.',
    example: 'vn',
  })
  @IsOptional()
  @IsString()
  id?: string;

  @ApiPropertyOptional({
    description: 'Country title or name used in specific contexts.',
    example: 'Vietnam',
  })
  @IsOptional()
  @IsString()
  title?: string;
}
