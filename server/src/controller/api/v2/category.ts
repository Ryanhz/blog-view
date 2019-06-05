import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'

import { Tables } from "../../../models";
import Post from "./post";

export default class Category {

  static async _cactegoryList(userid: number, fields?: string) {

    let CategoryT = Tables.Category
    let options = {
      where: {
        user_id: userid
      }
    }
    fields && (options['attributes'] = fields.split(','));
    let cactegoryList = await CategoryT.findAll(options)
    return cactegoryList
  }

  static async _posts(categoryid: number, postfields?: string) {
    let Post_categoryT = Tables.Post_category
    let post_ids = (await Post_categoryT.findAll({
      attributes: ['post_id'],
      where: {
        category_id: categoryid
      }
    })).map(item => item.post_id)

    let options = {
      where: {
        id: post_ids
      }
    }
    options['attributes'] = postfields && postfields.split(',') || ['createdAt', 'title', 'id']
    let posts = await Post._posts(options)
    return posts
  }

  static async pages(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['uid'] || 5000

    let cactegoryList = await Category._cactegoryList(userid, 'name,id,alias')

    let list = []

    for (const cactegory of cactegoryList) {
      let posts = await Category._posts(cactegory.id)
      list.push({
        cactegory,
        posts
      })
    }
    ctx.success(list)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async categories(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['uid'] || 5000
    let fields = ctx.query.fields
    let cactegoryList = await Category._cactegoryList(userid, fields)
    ctx.success(cactegoryList)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async posts(ctx: ZYContext, next: Next) {
    console.log(ctx.querystring)
    let cid = ctx.params.cid
    let fields = ctx.query.fields
    let posts = await Category._posts(cid, fields)
    ctx.success(posts)
  }
}

