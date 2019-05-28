'use strict';

class ResponseData {
  constructor(data = "", code = 0, message = 'SUCCESS') {
    this.data = data;
    this.status = {
      code: code,
      message: message
    }
  }
  static success(data = "") {
    return new ResponseData(data);
  }

  static error(code = -1, message = 'ERROR') {
    return new ResponseData("", code, message);;
  }
}

function success(data) {
  this.type = 'pplication/json';
  this.body = data || {}//ResponseData.success(data);
}

function error() {
  let status = 400
  let message = '未知异常'
  let code = '未知'

  if (arguments.length == 1) {
    let element = arguments[0]
    switch (typeof element) {
      case 'string':
        code = element
        break
      case 'number':
        status = element
        break
      case 'object':
        throw element;
        break;
      default:
        break;
    }
  }

  if (arguments.length == 2) {
    code = arguments[0]
    message = arguments[1]
  }

  if (arguments.length == 3) {
    status = arguments[0]
    code = arguments[0]
    message = arguments[0]
  }
  this.status = status
  this.body = {
    code,
    message
  }
}

export function middleware() {
  return async (ctx, next) => {
    if (!ctx.success) {
      ctx.success = success.bind(ctx);
    }
    if (!ctx.error) {
      ctx.error = error.bind(ctx);
    }
    try {
      await next();
    } catch (err) {
      console.log(JSON.stringify(err))
      ctx.response.status = 400;
      ctx.response.type = 'application/json';
      ctx.response.body = {
        code: err.code || 'internal:unknown_error',
        message: err.message || ''
      }
    }
  }
}



export default {
  middleware: middleware,
}




