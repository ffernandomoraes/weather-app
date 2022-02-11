import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API } from 'settings';

export async function get<T = any>(
  url: AxiosRequestConfig['url'],
  params?: AxiosRequestConfig['params'],
  headers?: AxiosRequestConfig['headers']
): Promise<AxiosResponse<T> | undefined> {
  return await request({ url, method: 'GET', params, headers });
}

export async function request(options: AxiosRequestConfig): Promise<AxiosResponse<any, any> | undefined> {
  try {
    return await axios({
      ...options,
      ...options.params,
      baseURL: API,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...options.headers
      }
    });
  } catch (err) {
    console.log(err);
  }
}

export default { get };
