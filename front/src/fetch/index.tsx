import axios, { AxiosRequestConfig } from "axios";

let config: AxiosRequestConfig = {
  baseURL: '/api',
  transformRequest: [
    function (data: any, headers?: any) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret;
    }
  ],
  transformResponse: [
    function (data: any, headers?: any) {
      return data;
    }
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  timeout: 10000,
  responseType: 'json'
}

export function get(url: string) {
  return axios.get(url, config)
}

export function post(url: string, data: any) {
  return axios.post(url, data, config)
}