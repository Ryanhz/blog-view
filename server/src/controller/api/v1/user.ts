import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'
import { Tables } from "../../../models";

class User {

  static async get(ctx: ZYContext, next: Next) {

    console.log(ctx.request);
    console.log(JSON.stringify(ctx.params))
    console.log(`---------`);
    let userid = ctx.params["id"]

    let UserT = Tables.User

    let user = await UserT.findOne({
      where: { id: userid }
    })
    if (!user) {
      user = await UserT.build({ name: "hzy" })
      user.name = "hzy"
      user.nickName = "抓根宝"
      user.email = "1810022686@qq.com"
      user.avatar = "http://localhost:8001/img/pkq.jpeg"
      user.signature = `种豆南山下，草盛豆苗稀。晨兴理荒秽，带月荷锄归。道狭草木长，夕露沾我衣。衣沾不足惜，但使愿无违。`
      user.birthday = '4月20'
      user = await user.save()
    } else {

      // user = await user.save()
    }

    console.log(`user---------${user}`);
    ctx.success(user)
  }
}

const router = new Router();
router.get("/:id", User.get)

// router.get("/", (c, n) => {
//   console.log(`---------`);
//   c.body = "user11111"
// })

export default router.routes();