
import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'

import { Tables } from "../../../models";

export default class Category {

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async get(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['uid']
    let fields = ctx.query.fields
    let CategoryT = Tables.Category
    let options = {
      where: {
        user_id: userid
      }
    }
    fields && (options['attributes'] = fields.split(','));

    let cactegoryList = await CategoryT.findAll(options)

    ctx.success(cactegoryList)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async posts(ctx: ZYContext, next: Next) {
    console.log(ctx.querystring)
    let cid = ctx.params.cid
    let fields = ctx.query.fields

    let Post_categoryT = Tables.Post_category
    let PostT = Tables.Post

    let post_ids = (await Post_categoryT.findAll({
      attributes: ['post_id'],
      where: {
        category_id: cid
      }
    })).map(item => item.post_id)
    let options = {
      where: {
        id: post_ids
      }
    }
    options['attributes'] = fields && fields.split(',') || ['createdAt', 'title']
    let posts = await PostT.findAll(options)
    ctx.success(posts)
  }
}

