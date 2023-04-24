import client from './client';
import API from './apis';
import { IErrorMsg } from '@src/types/error';

const errorAPI = {
  getErrorList: () => {
    return client.get(`${API.getErrorList}`);
  },
  postErrorDates: (data: any) => {
    return client.post(`${API.postErrorDates}`, data);
  },
  postErrorDetail: (data: IErrorMsg) => {
    return client.post(`${API.postErrorDetail}`, data);
  },
};

export default errorAPI;
