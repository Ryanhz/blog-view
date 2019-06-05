import * as Front from '../constants/front';
import { Post, Category_posts, Category, Tag } from "@Types/index";

export interface GET_Posts_Action {
  type: Front.GET_POSTS;
  userId: number
  query?: any
}

export interface Response_Posts_Action {
  type: Front.RESPONSE_POSTS;
  data: {
    list: Post[]
    pageNum: number
    total: number
  }
}

export interface GET_Post_Action {
  type: Front.GET_POST
  key: number|string
}

export interface Response_Post_Action {
  type: Front.RESPONSE_POST;
  data: Post
}

export interface GET_Category_Action {
  type: Front.GET_CATEGORY
  userid: number
  query: any
}

export interface Response_Category_Action {
  type: Front.RESPONSE_CATEGORY
  data: any
}

export interface GET_Category_Posts_Action {
  type: Front.GET_CATEGORY_POSTS
  cid: number
}

export interface Response_Category_Posts_Action {
  type: Front.RESPONSE_CATEGORY_POSTS
  data: any
}

export interface GET_Category_Index_Action {
  type: Front.GET_CATEGORY_INDEX
  userid: number
  query: any
}

export interface Response_Category_Index_Action {
  type: Front.RESPONSE_CATEGORY_INDEX
  category_posts: Category_posts[]
  categories: Category[]
}

//------------tags
export interface GET_Tag_Action {
  type: Front.GET_TAG
  tid: number
  query: any
}

export interface Response_Tag_Action {
  type: Front.RESPONSE_TAG
  tag: Tag
}

export interface GET_Tags_Action {
  type: Front.GET_TAGS
  userid: number
  query: any
}

export interface Response_Tags_Action {
  type: Front.RESPONSE_TAGS
  tags: Tag[]
}

export interface GET_Tag_Posts_Action {
  type: Front.GET_TAG_POSTS
  key: number|string
}

export interface Response_Tag_Posts_Action {
  type: Front.RESPONSE_TAG_POSTS
  posts: Post[]
}

export type RequsetAction = GET_Tag_Action|GET_Posts_Action | GET_Post_Action | GET_Category_Action | GET_Category_Posts_Action | GET_Category_Index_Action | GET_Tags_Action | GET_Tag_Posts_Action
export type ResponseAction = Response_Tag_Action|Response_Posts_Action | Response_Post_Action | Response_Category_Action | Response_Category_Posts_Action | Response_Category_Index_Action | Response_Tags_Action | Response_Tag_Posts_Action

export type FrontAction = RequsetAction | ResponseAction

export function get_posts(userId: number, query: any = null): GET_Posts_Action {
  return {
    type: Front.GET_POSTS,
    userId,
    query
  }
}

export function get_post(key: number|string): GET_Post_Action {
  return {
    type: Front.GET_POST,
    key
  }
}

export function get_category(userid: number, query: any = null): GET_Category_Action {
  return {
    type: Front.GET_CATEGORY,
    userid,
    query
  }
}

export function get_category_posts(cid: number): GET_Category_Posts_Action {
  return {
    type: Front.GET_CATEGORY_POSTS,
    cid
  }
}

export function get_category_index(userid: number, query: any = null): GET_Category_Index_Action {
  return {
    type: Front.GET_CATEGORY_INDEX,
    userid,
    query
  }
}

export function get_tag(tid: number, query: any = null): GET_Tag_Action {
  return {
    type: Front.GET_TAG,
    tid,
    query
  }
}

export function get_tags(userid: number, query: any = null): GET_Tags_Action {
  return {
    type: Front.GET_TAGS,
    userid,
    query
  }
}

export function get_tag_posts(key: number| string): GET_Tag_Posts_Action {
  return {
    type: Front.GET_TAG_POSTS,
    key
  }
}


// export const Request = {
//   get_post_list,
//   get_post_detail,
//   get_category,
//   get_category_posts,
//   get_category_index,
//   get_tags,
//   get_tags_posts
// }
