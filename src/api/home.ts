import client from './client';
import API from './apis';

const homeAPI = {
  getServing: () => {
    return client.get(`${API.getServing}`);
  },
};

export default homeAPI;
