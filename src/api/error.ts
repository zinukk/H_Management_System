import client from './client';
import API from './apis';

const errorAPI = {
  getDefailtErrorLists: () => {
    return client.get(`${API.getDefaultErrorLists}`);
  },
  postErrorDates: (data: any) => {
    return client.post(`${API.postErrorDates}`, data);
  },
};

export default errorAPI;
