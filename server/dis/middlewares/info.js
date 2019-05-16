"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function log(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}
exports.default = log;
//# sourceMappingURL=info.js.map