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

function error(code = 400, message = 'bad request', properties = null) {
  this.throw(code, message, properties) //= ResponseData.error(code, message);
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
      ctx.error(err.code, err.message, err);
    }
  }
}



export default {
  middleware: middleware,
}




