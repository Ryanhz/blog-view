import ZYResponse, { ZYContext, Next } from 'koa-response'
import { BaseController } from "./base";
import { Tables } from "../../../models";
import Post, { postController } from "./post";

export default class Tag extends BaseController {

  get Table() {
    return Tables.Tag
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  tags = async (ctx: ZYContext, next: ZYResponse.Next) => {
    let userid = ctx.params['uid']
    let fields = ctx.query.fields
    console.log(this)
    let cactegoryList = await this.Table.findAll({
      where: {
        user_id: userid
      },
      attributes: this.attributes(fields)
    })
    ctx.success(cactegoryList)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  async tag(ctx: ZYContext, next: ZYResponse.Next) {
    let tid = ctx.params['tid']
    let fields = ctx.query.fields
    let tag = await this.Table.findOne({
      where: {
        id: tid
      },
      attributes: this.attributes(fields)
    })
    ctx.success(tag)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  posts = async (ctx: ZYContext, next: Next) => {
    console.log(ctx.querystring)
    let tid = ctx.params.tid
    let fields = ctx.query.fields

    let Post_tagT = Tables.Post_tag
    let post_ids = (await Post_tagT.findAll({
      where: {
        tag_id: tid
      },
      attributes: this.attributesFor(Post_tagT, null, ['post_id'])
    })).map(item => item.post_id)

    let posts = await postController._posts({
      where: {
        id: post_ids
      },
      attributes: postController.attributes(fields, ['createdAt', 'title', 'id'])
    })
    ctx.success(posts)
  }
}

export const tagController = new Tag()
