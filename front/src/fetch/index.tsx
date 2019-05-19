import axios, { AxiosRequestConfig, AxiosTransformer, AxiosAdapter, AxiosBasicCredentials, AxiosProxyConfig, CancelToken } from "axios";
import { baseURL } from "./api";
import { zy_log } from "@Units/index";

let config: AxiosRequestConfig = {
  baseURL: baseURL,
  transformRequest: [
    function (data: any, headers?: any) {
      return data
      //   let ret = '';
      //   for (let it in data) {
      //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      //   }
      //   return ret;
    }
  ],
  transformResponse: [
    function (data: any, headers?: any) {
      return data;
    }
  ],
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 10000,
  responseType: 'json'
}

class RequestConfig implements AxiosRequestConfig {
  url?: string;
  method?: string;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: (status: number) => boolean;
  maxRedirects?: number;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;

  constructor(url: string, params: any, method?: string) {
    this.url = url
    this.method = method
    this.params = params
    this.baseURL = baseURL
  }
}


export async function requset(url: string, data?: any, method?: string) {
  zy_log(`-----------url: ${url}  data: ${data}, method: ${method}`)

  try {
    let response = await axios.request(new RequestConfig(url, data, method))
    zy_log(`------------------------request:${JSON.stringify(response.config)} \nresponse:${JSON.stringify(response.data)}`)
    if(!response || !response.data ) {
      throw "没有响应"
    }

    return response.data

  } catch (error) {
    throw "网络错误"
  }

  return axios.request(new RequestConfig(url, data, method))
}

export function get(url: string, data: any = null) {
  return requset(url, data, 'get')

}
export function post(url: string, data: any) {
  return requset(url, data, 'post')
}