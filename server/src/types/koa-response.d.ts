
import Koa from "koa";
import Router from "koa-router";

declare module "koa" {
  interface Context {
    success(data?: {} | [] | string | number): void
    error(code?: number, message?: string): void
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

    /**
    * response 异常
    * @param ctx
    * @param code 错误码 || [错误码, 错误描述]
    * @param message 错误描述
    */
    error(code?: number, message?: string): void
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
