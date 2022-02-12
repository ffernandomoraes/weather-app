import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API as baseURL } from 'settings';

export async function get<T = unknown>(
  url: AxiosRequestConfig['url'],
  params?: AxiosRequestConfig['params'],
  headers?: AxiosRequestConfig['headers']
): Promise<AxiosResponse<T> | undefined> {
  return await request<T>({ url, method: 'GET', params, headers });
}

export async function request<T = unknown>(options: AxiosRequestConfig): Promise<AxiosResponse<T> | undefined> {
  try {
    return await axios({
      ...options,
      ...options.params,
      baseURL,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        ...options.headers
      }
    });
  } catch (error) {
    const { data } = error.response;

    if (data?.message) {
      throw new Error(data.message);
    }

    throw new Error(error.message);
  }
}

export default { get };
