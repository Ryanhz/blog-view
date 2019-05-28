
import Koa from "koa";
import Router from "koa-router";
import { APIError } from "../utils/error";
declare module "koa" {
  interface Context {
    success(data?: {} | [] | string | number): void
    error(status: number): never;
    error(code: string): never;
    error(code: string, message: string): never;
    error(status: number, code: string, message: string): never;
  }
}

declare namespace ZYResponse {

  export interface ZYContext extends Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>> {
    /**
     * response 成功
     * @param ctx
     * @param data 数据
     * @param code 错误码 || [错误码, 错误描述]
     * @param message 错误描述
     */
    success(data?: {} | [] | string | number): void


    error(error: APIError): never;
    error(status: number): never;
    error(code: string): never;
    error(code: string, message: string): never;
    error(status: number, code: string, message: string): never;
  }

  // class ResponseData {
  //   constructor(data?: any, code?: number, message?: string)
  //   static success(data?: any): ResponseData
  //   static error(code?: number, message?: string): ResponseData
  // }

  export function middleware(): Koa.Middleware

  type Next = () => Promise<any>
}

export = ZYResponse;
