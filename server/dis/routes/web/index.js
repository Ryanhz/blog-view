"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
router.get("/web/:id", (ctx, next) => {
    ctx.body = ctx.params.id;
    // ctx.body = `
    // <h2>This is demo2</h2>
    // <form method="post" action="/api/v1/account/sign">
    //     <p>username:</p>
    //     <input name="username">
    //     <p>age:</p>
    //     <input name="age">
    //     <p>website</p>
    //     <input name="website">
    //     <button type="submit">submit</button>                   
    // </form>
    // `
});
router.get("/", (ctx, next) => {
    // ctx.body = ctx.querystring.toString();
    ctx.body = `
  <h2>This is demo2</h2>
  <form method="post" action="/api/v1/account/sign">
      <p>username:</p>
      <input name="username">
      <p>age:</p>
      <input name="age">
      <p>website</p>
      <input name="website">
      <button type="submit">submit</button>                   
  </form>
  `;
});
exports.default = router;
//# sourceMappingURL=index.js.map