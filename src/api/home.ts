import client from './client';
import API from './apis';

const homeAPI = {
  getServing: () => {
    return client.get(`${API.getServing}`);
  },
  getStores: () => {
    return client.get(`${API.getStores}`);
  },
  getErrorStatus: () => {
    return client.get(`${API.getErrorStatus}`);
  },
};

export default homeAPI;
