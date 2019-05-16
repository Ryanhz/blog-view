"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const account_1 = __importDefault(require("../../../controller/account"));
const router = new koa_router_1.default();
// router.get('*', (ctx, next) => {
//   ctx.body = '---account-'
// })
// el/api/v1/account
router.post("/signup", account_1.default.signup);
router.post("/sign", account_1.default.sigin);
router.post("/signout", account_1.default.signout);
exports.default = router.routes();
//# sourceMappingURL=account.js.map