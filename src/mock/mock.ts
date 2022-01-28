import Mock from 'mockjs';

type MockFunc<T> = (params: MockRequest) => T;

export interface MockRequest {
  body: string;
  type: string;
  url: string;
}

const getQueryKeyValue = (str: string) => str.split('=');

const translQueryValueToOriginType = (str: string): string | number | boolean => {
  // check boolean
  if (['true', 'false'].includes(str)) return str === 'true';
  // check number
  if (!isNaN(+str)) return Number(str);
  // string
  return str;
};

const getReqBody = (req: MockRequest): MockRequest => {
  const { url } = req;
  const bodyObj = url
    .split('?')[1]
    .split('&')
    .reduce((acc: { [key: string]: string | number | boolean }, queryStr: string) => {
      const [queryKey, queryVal] = getQueryKeyValue(queryStr);
      const val = translQueryValueToOriginType(queryVal);
      acc[queryKey] = val;
      return acc;
    }, {});
  req.body = JSON.stringify(bodyObj);
  return req;
};

export default {
  get: <T>(url: string, func: MockFunc<T>): Mock.Mockjs => {
    return Mock.mock(RegExp(url + '.*'), 'get', (req: MockRequest) => {
      req = getReqBody(req);
      return func(req);
    });
  },

  post: <T>(url: string, func: MockFunc<T>): Mock.Mockjs => Mock.mock(RegExp(url + '.*'), 'post', func),

  put: <T>(url: string, func: MockFunc<T>): Mock.Mockjs => Mock.mock(RegExp(url + '.*'), 'put', func),

  patch: <T>(url: string, func: MockFunc<T>): Mock.Mockjs => Mock.mock(RegExp(url + '.*'), 'patch', func),

  delete: (url: string): Mock.Mockjs => Mock.mock(RegExp(url + '.*'), 'delete')
};
