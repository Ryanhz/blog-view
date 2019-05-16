"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = async (ctx, next) => {
    await next();
    if (ctx.status == 404) {
        // ctx.status = 404;
        // ctx.body="这是一个404页面"
        throw new Error("错误的api");
    }
};
//# sourceMappingURL=errorHandler.js.map