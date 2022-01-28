import axios, { AxiosInstance, AxiosResponse, HeadersDefaults } from 'axios';

const service: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '/api' : 'https://127.0.0.1',
  timeout: 1000 * 120
});

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

service.defaults.headers = {
  Authorization: `Bearer ${sessionStorage.getItem('token')}`
} as CommonHeaderProperties;

export type HttpRes<Data> = AxiosResponse<Data, Data>;

const http = {
  get: <Param, Data>(url: string, params: Param): Promise<HttpRes<Data>> => {
    return service.get(url, { params: params });
  },
  post: <Param, Data>(url: string, params: Param): Promise<HttpRes<Data>> => {
    return service.post(url, params);
  },
  delete: <Param, Data>(url: string, params: Param): Promise<HttpRes<Data>> => {
    return service.delete(url, params);
  },
  put: <Param, Data>(url: string, params: Param): Promise<HttpRes<Data>> => {
    return service.put(url, params);
  },
  patch: <Param, Data>(url: string, params: Param): Promise<HttpRes<Data>> => {
    return service.patch(url, params);
  }
};

export default http;
