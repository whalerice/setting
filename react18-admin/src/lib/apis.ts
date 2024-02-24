import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  // baseURL: import.meta.env.VITE_APP_API_URL + import.meta.env.VITE_APP_PATH,
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
  //   const sessionToken = cookies().get('x-qbot-session')?.value;

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
    health: () => request.get('/api/app/health'),
  },
  user: {
    login: (data: { loginId: any; password: any }) =>
      request.post('/api/user/login', data),
    logout: (data: { user: { id: any } }) =>
      request.post('/api/user/logout', data),
    sessionTouch: () => request.get('/api/user/session-touch'),
  },
};
