import { Injectable } from '@nestjs/common';
import { CountryService } from "./country.service";
import * as _ from 'lodash';
import { Country } from "../countries.type";


@Injectable()
export class CountriesService {

    constructor(private readonly countryService: CountryService) { }

    getAllCountries(fields: Array<string>, page: number = 1, limit: number = 10, sortBy: Array<string> = ['id'], order: string = 'asc') {
        let countries: Array<Country> = this.countryService.getContries();
        let data:any = [];

        let pagination: any = {
            total: 0,
            totalPages: 0,
            currentPage: page,
            limit
        }

        
        if(Array.isArray(countries)) {
            let countrys = [];

            countrys = [...countries];
            if(fields.length) {
                countrys = [];
                countrys = countries?.map((country: any) => {
                    let data: any = {};

                    for(let key of fields) {
                        data[key] = country[key];
                    }

                    data.title = country.title;
                    data.id = country.id;
                    return data;
                })
            }

            const start = (page - 1) * limit;
            const limited = page * limit;

            data = countrys.slice(start, limited);
            pagination.total = countries.length;
            pagination.totalPages = Math.ceil(countries.length / limit);
        }

        if(sortBy && sortBy.length && Array.isArray(data)) {
            data = _.sortBy(data,  [...sortBy], [order]);
        }

        return {
            data, pagination
        };
    }


    getCountryById(id: string) {
        let countries: Array<Country> = this.countryService.getContries();
        if(countries.length) {
            let country = countries.find((country: Country) => country.id.toLowerCase() === id.toLocaleLowerCase());
            return country;
        }

        return null;
    }
}
