import apiInstance from '../api-config';

const searchApi = {
  fetchSearch: async (query: string) => {
    const response = await apiInstance
      .get(`posts/search?q=${query}`)
      .then((res) => res);
    return response.data;
  },
};

export default searchApi;
