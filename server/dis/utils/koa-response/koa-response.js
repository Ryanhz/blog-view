'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseData {
    constructor(data = "", code = 0, message = 'SUCCESS') {
        this.data = data;
        this.status = {
            code: code,
            message: message
        };
    }
    static success(data = "") {
        return new ResponseData(data);
    }
    static error(code = -1, message = 'ERROR') {
        return new ResponseData("", code, message);
        ;
    }
}
function success(data) {
    this.body = ResponseData.success(data);
}
function error(message = 'ERROR', code = -1) {
    this.body = ResponseData.error(code, message);
}
function middleware() {
    return async (ctx, next) => {
        ctx.success = success.bind(ctx);
        ctx.error = error.bind(ctx);
        try {
            await next();
        }
        catch (err) {
            ctx.error(err.message, err.code);
        }
    };
}
exports.middleware = middleware;
exports.default = {
    middleware: middleware,
};
//# sourceMappingURL=koa-response.js.map