import ZYResponse, { ZYContext, Next } from 'koa-response'

import { Tables } from "../../../models";
import Post from "./post";

export default class Tag {

  private static async _tags(userid: number, fields?: string) {

    let TagT = Tables.Tag
    let options = {
      where: {
        user_id: userid
      }
    }
    fields && (options['attributes'] = fields.split(','));
    let cactegoryList = await TagT.findAll(options)
    return cactegoryList
  }

  private static async _tag(tid: number, fields?: string) {

    let TagT = Tables.Tag
    let options = {
      where: {
        id: tid
      }
    }
    fields && (options['attributes'] = fields.split(','));
    let tag = await TagT.findOne(options)
    return tag
  }

  private static async _posts(tagid: string, postfields?: string) {
    let Post_tagT = Tables.Post_tag


    let post_ids = (await Post_tagT.findAll({
      attributes: ['post_id'],
      where: {
        tag_id: tagid
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

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async tags(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['uid']||5000
    let fields = ctx.query.fields
    let cactegoryList = await Tag._tags(userid, fields)
    ctx.success(cactegoryList)
  }

   //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
   static async tag(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['tid']
    let fields = ctx.query.fields
    let cactegoryList = await Tag._tag(userid, fields)
    ctx.success(cactegoryList)
  }

  //GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
  static async posts(ctx: ZYContext, next: Next) {
    console.log(ctx.querystring)
    let name = ctx.params.name
    let fields = ctx.query.fields

    let TagT = Tables.Tag

   let tag = await TagT.findOne({
     where:{
       name: name
     }
   })

    let Post_tagT = Tables.Post_tag

    let post_ids = (await Post_tagT.findAll({
      attributes: ['post_id'],
      where: {
        tag_id: tag.id
      }
    })).map(item => item.post_id)

    let options = {
      where: {
        id: post_ids
      }
    }
    options['attributes'] = fields && fields.split(',') || ['createdAt', 'title', 'id']
    let posts = await Post._posts(options)

    ctx.success(posts)
  }
}

