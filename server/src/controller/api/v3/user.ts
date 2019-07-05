import ZYResponse, { ZYContext, Next } from 'koa-response'
import { Model } from "sequelize-typescript";
import { Tables } from "../../../models";
import { APIError } from "../../../utils/error";

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

class BaseController<Table extends any> {
  attributes?: string[]
  table: Table
  colums: string[] = Object.keys(this.table.rawAttributes)

}

export default class User {

  static attributes = ['sex', 'id', 'name', 'nickName', 'ip', 'signature', 'email', 'avatar', 'rights', 'birthday', 'loginedAt']
  static table = Tables.User
  static colums = Object.keys(User.table.rawAttributes)

  static async some(ctx: ZYContext, next: Next) {

  }

  static async post(ctx: ZYContext, next: Next) {

  }

  static async master(ctx: ZYContext, next: Next) {

    let fields: string = ctx.query.fields
    let attributes = fields && fields.split(',') || []
    attributes = attributes.filter(va => {
      return this.colums.indexOf(va) > -1
    })

    attributes.length == 0 && (attributes = this.attributes)

    await this._createMaster()

    let res = await this.table.findByPk(1, {
      attributes: attributes
    })
    ctx.success(res)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async one(ctx: ZYContext, next: Next) {

    console.log(ctx.request);
    console.log(JSON.stringify(ctx.params))
    console.log(`---------`);

    let userId = ctx.params["uid"]
    let fields: string = ctx.query.fields
    let attributes = fields && fields.split(',') || this.attributes
    if (userId) {
      let res = await this.table.findById(userId, {
        attributes: attributes
      })
      res ? ctx.success(res) : ctx.error(UserError.notFind(userId))
      return
    }
  }

  static async _createMaster() {

    if (await this.table.count({ where: { id: 1 } })) {
      return;
    }
    let user = await this.table.build({ name: "hzy" })
    user.name = "hzy"
    user.id = 1
    user.rights = 'master'
    user.nickName = "抓根宝"
    user.email = "1810022686@qq.com"
    user.avatar = "http://localhost:8001/img/pkq.jpeg"
    user.signature = `种豆南山下，草盛豆苗稀。晨兴理荒秽，带月荷锄归。道狭草木长，夕露沾我衣。衣沾不足惜，但使愿无违。`
    user.birthday = '4月20'
    user = await user.save()
  }
}