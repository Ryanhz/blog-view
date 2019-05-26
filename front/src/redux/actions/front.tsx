import * as Front from '../constants/front';
import { Post_cardable, Post_Details  } from "@Types/index";

export interface GET_list_Action {
  type: Front.GET_POST_LIST;
  userId:number
  query?: any
}

export interface Response_list_Action {
  type: Front.RESPONSE_POST_LIST;
  data: {
    list: Post_cardable[]
    pageNum: number
    total: number
  }
}

export interface GET_detail_Action {
  type: Front.GET_POST_DETAIL
  userid: number
  id: number
}

export interface Response_Post_detail_Action {
  type: Front.RESPONSE_POST_DETAIL;
  data: Post_Details
}

export interface GET_Category_Action {
  type: Front.GET_CATEGORY
  userid: number
}

export interface Response_Category_Action {
  type: Front.RESPONSE_CATEGORY
  data: any
}

export interface GET_Category_Posts_Action {
  type: Front.GET_CATEGORY_POSTS
  userid: number
  cid: number
}

export interface Response_Category_Posts_Action {
  type: Front.RESPONSE_CATEGORY_POSTS
  data: any
}

export type RequsetAction = GET_list_Action | GET_detail_Action | GET_Category_Action | GET_Category_Posts_Action
export type ResponseAction = Response_list_Action | Response_Post_detail_Action | Response_Category_Action | Response_Category_Posts_Action

export function get_post_list(userId: number, query: any = null): GET_list_Action {
  return {
    type: Front.GET_POST_LIST,
    userId,
    query
  }
}

export function get_post_detail(userid: number,id: number): GET_detail_Action {
  return {
    type: Front.GET_POST_DETAIL,
    userid,
    id
  }
}

export function get_category(userid: number): GET_Category_Action {
  return {
    type: Front.GET_CATEGORY,
    userid,
  }
}

export function get_category_posts(userid: number, cid: number): GET_Category_Posts_Action {
  return {
    type: Front.GET_CATEGORY_POSTS,
    userid,
    cid
  }
}

export const Request = {
  get_post_list,
  get_post_detail,
  get_category,
  get_category_posts
}
