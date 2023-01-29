import axios, { AxiosResponse } from 'axios';

export const baseURL: string = process.env.NEXT_PUBLIC_BASE_URL as string;

const client = axios.create({ baseURL });

client.interceptors.response.use((res: AxiosResponse) => {
  try {
    if (res.status === 200) {
      return res.data;
    } else {
      return [res.data.error, res.data.message];
    }
  } catch (e: any) {
    return e.message;
  }
});

export default client;
