import client from './client';
import API from './apis';

const errorAPI = {
  getDefailtErrorLists: () => {
    return client.get(`${API.getDefaultErrorLists}`);
  },
};

export default errorAPI;
