import apiInstance from '../api-config';

const postsApi = {
  fetchFeeds: async () => {
    const response = await apiInstance.get(`/posts`).then((res) => res);
    return response.data;
  },
};

export default postsApi;
