import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'
import { fs } from 'mz'
import path from 'path'
import { tables } from "../../../models";

class User {

  static async get(ctx: ZYContext, next: Next) {

    console.log(ctx.request);
    console.log(`---------`);
    let UserT = tables.user

    let user = await UserT.findOne()
    if (!user) {
      user = await UserT.create({ name: "hzy" })
      user.name = "hzy"
      user.nickName = "抓根宝"
      user.email = "1810022686@qq.com"
      user.avatar = "http://localhost:8001/img/pkq.jpeg"
      user.signature = `Life to learn to enjoy: enjoy the joy of work, enjoy the laughter of friends, enjoy the warmth of family, enjoy the joy of creation, enjoy the sweet fruit.`
      user.birthday = '4月20'
      user = await user.save()
    } else {
      user.signature = `Life to learn to enjoy: enjoy the joy of work, enjoy the laughter of friends, enjoy the warmth of family, enjoy the joy of creation, enjoy the sweet fruit.`
      // user.nickName = "抓根宝"
      // user.avatar = "http://localhost:8001/img/pkq.jpeg"
      // user = await user.save()
    }

    console.log(`---------${user}`);
    ctx.success(user)
  }
}

const router = new Router();
router.get("/", User.get)

// router.get("/", (c, n) => {
//   console.log(`---------`);
//   c.body = "user11111"
// })

export default router.routes();