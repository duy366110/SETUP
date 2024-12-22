import { Injectable } from '@nestjs/common';
import * as countries from 'world-countries';
import { Country } from "../countries.type";

@Injectable()
export class CountryService {

    getContries() {
        if(Array.isArray(countries)) {
            let countrys = countries.map((country: Country) => {
                return {
                    ...country,
                    id: country.name.common.split(/\s+/).join("")?.toUpperCase(),
                    title: country.name.common,
                }
            })
            return countrys;
        }
        return [];
    }

}
