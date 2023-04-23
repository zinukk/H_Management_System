import client from './client';
import API from './apis';

const errorAPI = {
  getErrorList: () => {
    return client.get(`${API.getErrorList}`);
  },
  postErrorDates: (data: any) => {
    return client.post(`${API.postErrorDates}`, data);
  },
};

export default errorAPI;
