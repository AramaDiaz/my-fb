import apiInstance from '../api-config';

const searchApi = {
  fetchSearch: async (query: string, page: number) => {
    const response = await apiInstance
      .get(`posts/search?q=${query}&limit=10&skip=${page * 10}`)
      .then((res) => res);
    return response.data;
  },
};

export default searchApi;
