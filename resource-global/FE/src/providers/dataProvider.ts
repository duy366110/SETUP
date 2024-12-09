import simpleRestProvider from "ra-data-simple-rest";
import { fetchUtils } from "ra-core";

interface Params {
  data?: any
}

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

const baseDataProvider = simpleRestProvider(apiUrl, httpClient);


export const dataProvider = {
  ...baseDataProvider,

  getDefined: (resource: string, params: Params) => {
      const url = `${apiUrl}/${resource}`;
      const options = {
          method: 'GET',
          body: JSON.stringify(params.data),
      };

      return httpClient(url, options).then(({ json }) => ({
          data: json,
      }));
  },
};
