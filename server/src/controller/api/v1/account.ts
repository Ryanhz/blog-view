import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'
import crypto from "crypto";
import User from "@model/user";

class Account {

  static async sigin(ctx: ZYContext, next: ZYResponse.Next) {
    console.log(ctx.request.body);
    ctx.success('登陆')
  }

  static async signup(ctx: ZYContext, next: Next) {
    console.log(ctx.querystring)


    ///User
  }

  static async signout(ctx: ZYContext, next: Next) {
    console.log(ctx.querystring)
  }

  MD5(password: string) {
    const md5 = crypto.createHash("md5");
    return md5.update(password).digest('base64');
  }

}



const router = new Router();
// el/api/v1/account
router.post("/signup", Account.signup)
router.post("/sign", Account.sigin)
router.post("/signout", Account.signout)

export default router.routes();