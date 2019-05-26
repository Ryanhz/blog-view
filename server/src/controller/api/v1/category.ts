
import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'

import { Tables } from "../../../models";

class Category {

    static async all(ctx: ZYContext, next: ZYResponse.Next) {
    let userid = ctx.params['userid']

    let CategoryT = Tables.Category
    let Post_categoryT = Tables.Post_category
    let userT = Tables.User

    let user = await userT.findById(userid,{include: [CategoryT]})

    if (!user){
      ctx.error(-1,"not found user")
      return;
    }
    console.log(`--------${JSON.stringify(user.categorys)}`)

    let data = []

    for ( const category  of user.categorys) {
     let count = await Post_categoryT.count({
        where: {
          category_id: category.id
        }
      })
      data.push( {
        category,
        postCount: count
      })
    }

    ctx.success(data)
    }
  
    static async one(ctx: ZYContext, next: Next) {
      console.log(ctx.querystring)
      let userid = ctx.params['userid']
      let cid = ctx.params.categoryid

      let Post_categoryT = Tables.Post_category
      let PostT = Tables.Post

      let post_ids = (await Post_categoryT.findAll({
        attributes: ['post_id'],
        where: {
          category_id :cid
        }
      })).map(item=>item.post_id)

     let posts = await PostT.findAll({
        attributes: ['createdAt','title'],
        where: {
          id:post_ids,
          user_id: userid
        }

      })
      ctx.success(posts)
    }
  
    static async signout(ctx: ZYContext, next: Next) {
      console.log(ctx.querystring)
    }
  }
  
  const router = new Router();
  router.get("/:userid", Category.all)
  router.get("/:userid/:categoryid", Category.one)
  export default router.routes();