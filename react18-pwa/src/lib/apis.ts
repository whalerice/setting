import axios from 'axios';
import qs from 'qs';
// import { Cookies } from 'react-cookie';

// const cookies = new Cookies();

const instance = axios.create({
  paramsSerializer: (value) =>
    qs.stringify(value, {
      arrayFormat: 'repeat',
      allowDots: true,
    }),
});

type SendParams = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: object;
  params?: object;
  isForm?: boolean;
  isRefreshToken?: boolean;
};
// language: lang,
const send = async (options: SendParams) => {
  const { url, method, data, params, isForm } = options;
  try {
    const response = await instance.request({
      url,
      method,
      data,
      params: params,
      headers: {
        Accept: 'application/json',
        ...(isForm ? { 'Content-Type': 'multipart/form-data' } : {}),
      },
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error: any) {
    if (error.response.data) {
      throw error.response.data;
    }
    throw error;
  }
};
const request = {
  get: async (url: string, params?: object | undefined) =>
    await send({ url, method: 'GET', data: undefined, params }),
  post: async (
    url: string,
    data?: object | undefined,
    params?: object | undefined,
    isForm?: boolean,
  ) => await send({ url, method: 'POST', data, params, isForm }),
};

export const apis = {
  app: {
    setting: () => request.post('/chatApi/app/setting'),
  },
  user: {},
};
