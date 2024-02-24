import axios from 'axios';
import { saveSessionCookie } from '@/lib/actions';
// import { cookies } from 'next/headers';

// const lang = 'ko-KR';
const instance = axios.create({
  baseURL: process.env.APP_URL,
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
  // const sessionToken = cookies().get('x-qbot-session')?.value;

  const { url, method, data, params, isForm } = options;
  try {
    const response = await instance.request({
      url,
      method,
      data,
      params: params,
      headers: {
        // ...(sessionToken ? { 'x-qbot-session': sessionToken } : {}),
        // Authorization: `Bearer ${process.env.token}`,
        Accept: 'application/json',
        ...(isForm ? { 'Content-Type': 'multipart/form-data' } : {}),
      },
      withCredentials: true,
    });

    if (response.headers['set-cookie']) {
      saveSessionCookie(response.headers['set-cookie'][0]);
    }

    if (response.status !== 200) {
      throw response;
    }

    return response.data;
  } catch (error: any) {
    if (error.response.data.message) {
      throw new Error(error.response.data.message);
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
  user: {
    login: (data: any) => request.post('/user/login', data),
    logout: (data: { user: { id: any } }) => request.post('/user/logout', data),
    sessionTouch: () => request.get('/user/session-touch'),
  },
};
