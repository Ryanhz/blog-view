import ZYResponse, { ZYContext, Next } from 'koa-response'
import { Tables } from "../../../models";
import { APIError } from "../../../utils/error";
import { BaseController } from "./base";
import Page from "../../../utils/page";

class UserError implements APIError {
  code: string
  message?: string
  constructor(code: string, message: string = null) {
    this.code = code
    this.message = message
  }
  static notFind(q: any) {
    return new UserError('users: NOT Find', `NOT Find by ${q} `)
  }
}

export default class User extends BaseController {

  get Table() {
    return Tables.User
  }

  // name
  some = async (ctx: ZYContext, next: Next) => {
    let fields: string = ctx.query.fields
    let name: string = ctx.query.name
    let page = new Page(parseInt(ctx.query.page), parseInt(ctx.query.pageSize))

    if (name) {
      let res = await this.Table.findOne({
        where: {
          name: name
        },
        attributes: this.attributes(fields)
      })
      res ? ctx.success(res) : ctx.error(UserError.notFind(name))
      return
    }

    let res = await this.Table.findAndCountAll({
      where: {

      },
      attributes: this.attributes(fields),
      limit: page.pageSize,
      offset: page.page
    })
    ctx.success(res)
  }

  async post(ctx: ZYContext, next: Next) {

  }

  master = async (ctx: ZYContext, next: Next) => {
    let fields: string = ctx.query.fields
    await this._createMaster()
    console.log(this.attributes(fields))
    let res = await this.Table.findByPk(1, {
      attributes: this.attributes(fields)
    })
    ctx.success(res)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  one = async (ctx: ZYContext, next: Next) => {

    console.log(ctx.request);
    console.log(JSON.stringify(ctx.params))
    console.log(`---------`);

    let userId = ctx.params["uid"]
    let fields: string = ctx.query.fields

    if (userId) {
      let res = await this.Table.findById(userId, {
        attributes: this.attributes(fields)
      })
      res ? ctx.success(res) : ctx.error(UserError.notFind(userId))
      return
    }
  }

  _createMaster = async () => {
    if (await this.Table.count({ where: { id: 1 } })) {
      return;
    }
    let user = await this.Table.build({ name: "Ryan" })
    user.name = "Ryan"
    user.id = 1
    // user.sex = 5
    user.rights = 'master'
    user.nickName = "抓根宝"
    user.email = "1810022686@qq.com"
    user.avatar = "http://localhost:8001/img/pkq.jpeg"
    user.signature = `种豆南山下，草盛豆苗稀。晨兴理荒秽，带月荷锄归。道狭草木长，夕露沾我衣。衣沾不足惜，但使愿无违。`
    user.birthday = '4月20'
    user = await user.save()
  }
}

export const userControl = new User()