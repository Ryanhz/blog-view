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
      user.avatar = "img/pkq.jpeg"
      user.signature = `The Dragonborn Comes
      Our hero, our hero, claims a warrior's heart.
      I tell you, I tell you, the Dragonborn comes.
      With a Voice wielding power of the ancient Nord art.
      Believe, believe, the Dragonborn comes.
      It's an end to the evil, of all Skyrim's foes.
      Beware, beware, the Dragonborn comes.
      For the darkness has passed, and the legend yet grows.
      You'll know, You'll know the Dragonborn's come.`
      user.birthday = '4月20'
      user = await user.save()
    } else {

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