import { Injectable } from '@nestjs/common';
import * as countries from 'world-countries';
import * as _ from 'lodash';


@Injectable()
export class CountriesService {

    getAllCountries(fields: Array<string>, page: number = 1, limit: number = 10, sortBy: Array<string> = ['id'], order: string = 'asc') {
        let dataContries = {
            data: [],
            pagination: {
                total: 0,
                totalPages: 0,
                currentPage: page,
                limit
            }
        };

        
        if(Array.isArray(countries)) {
            let countriesList = [];

            countriesList = [...countries];
            if(fields.length) {
                countriesList = [];
                countriesList = countries?.map((country: any) => {
                    let countryData: any = {};

                    for(let key of fields) {
                        countryData[key] = country[key];
                    }

                    countryData.title = countryData.name.common;
                    countryData.id = countryData.name.common.split(/\s+/).join("")?.toUpperCase();
                    return countryData;
                })
            }

            const start = (page - 1) * limit;
            const limited = page * limit;

            dataContries.data = countriesList.slice(start, limited);
            dataContries.pagination.total = countries.length;
            dataContries.pagination.totalPages = Math.ceil(countries.length / limit);
        }

        if(sortBy && sortBy.length && Array.isArray(dataContries.data)) {
            dataContries.data = _.sortBy(dataContries.data,  [...sortBy], [order]);
        }

        return dataContries;
    }
}
