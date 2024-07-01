import restProvider from "ra-data-simple-rest";
import { fetchUtils } from "react-admin";

const customDataProvider = (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
) => {
  const dataProvider = restProvider(apiUrl, httpClient);

  return {
    ...dataProvider,

    // Custom get method (GET)
    get: (resource: string, params: any) => {
      const { id } = params;
      const url = id ? `${apiUrl}/${resource}/${id}` : `${apiUrl}/${resource}`;
      return httpClient(url).then((response) => ({
        data: response.json,
      }));
    },

    // Custom delete method (DELETE)
    delete: (resource: string, params: any) => {
      const { id, previousData } = params;
      const url = `${apiUrl}/${resource}/${id}`;
      return httpClient(url, {
        method: "DELETE",
        body: JSON.stringify(previousData),
      }).then((response) => ({
        data: response.json,
      }));
    },

    // Custom create method (POST)
    create: (resource: string, params: any) => {
      const url = `${apiUrl}/${resource}/save`;
      return httpClient(url, {
        method: "POST",
        body: JSON.stringify(params.data),
      }).then((response) => ({
        data: response.json,
      }));
    },

    // Custom update method (PUT)
    update: (resource: string, params: any) => {
      const { id, data } = params;
      const url = `${apiUrl}/${resource}/${id}`;
      return httpClient(url, {
        method: 'PUT',
        body: JSON.stringify(data),
      }).then(response => ({
        data: response.json,
      }));
    },

  };
};

export default customDataProvider;
