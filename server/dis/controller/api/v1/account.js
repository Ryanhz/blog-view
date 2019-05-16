"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const crypto_1 = __importDefault(require("crypto"));
class Account {
    static async sigin(ctx, next) {
        console.log(ctx.request.body);
        ctx.success('登陆');
    }
    static async signup(ctx, next) {
        console.log(ctx.querystring);
    }
    static async signout(ctx, next) {
        console.log(ctx.querystring);
    }
    MD5(password) {
        const md5 = crypto_1.default.createHash("md5");
        return md5.update(password).digest('base64');
    }
}
const router = new koa_router_1.default();
// el/api/v1/account
router.post("/signup", Account.signup);
router.post("/sign", Account.sigin);
router.post("/signout", Account.signout);
exports.default = router.routes();
//# sourceMappingURL=account.js.map