import { Post, Category_posts, Category, Tag } from "@Types/index";
import { Front } from './storeMix';

export enum FrontReduxType {
  GET_POSTS = 'F-GET_POSTS', RESPONSE_POSTS = 'F-RESPONSE_POSTS',

  GET_POST = 'F-GET_POST', RESPONSE_POST = 'F-RESPONSE_POST',

  GET_CATEGORY = 'F-GET_CATEGORY', RESPONSE_CATEGORY = 'F-RESPONSE_CATEGORY',

  GET_CATEGORY_POSTS = 'F-GET_CATEGORY_POSTS', RESPONSE_CATEGORY_POSTS = 'F-RESPONSE_CATEGORY_POSTS',

  GET_CATEGORY_INDEX = 'F-GET_CATEGORY_INDEX', RESPONSE_CATEGORY_INDEX = 'F-RESPONSE_CATEGORY_INDEX',

  GET_TAG = 'F-GET_TAG', RESPONSE_TAG = 'F-RESPONSE_TAG',

  GET_TAGS = 'F-GET_TAGS', RESPONSE_TAGS = 'F-RESPONSE_TAGS',

  GET_TAG_POSTS = 'F-GET_TAG_POSTS', RESPONSE_TAG_POSTS = 'F-RESPONSE_TAG_POSTS'
}

export type RequsetAction = FrontActions.GET_Tag | FrontActions.Get_posts |
  FrontActions.Get_post | FrontActions.GET_Category |
  FrontActions.GET_Category_Posts | FrontActions.GET_Category_Index |
  FrontActions.GET_Tags_Action | FrontActions.GET_Tag_Posts

export type ResponseAction = FrontActions.Response_Tag | FrontActions.Response_posts |
  FrontActions.Response_post | FrontActions.Response_Category |
  FrontActions.Response_Category_Posts | FrontActions.Response_Category_Index |
  FrontActions.Response_Tags | FrontActions.Response_Tag_Posts

export namespace FrontActions {

  export interface Get_posts {
    type: FrontReduxType.GET_POSTS;
    userId: number
    query?: any
  }

  export interface Response_posts {
    type: FrontReduxType.RESPONSE_POSTS;
    data: {
      list: Post[]
      pageNum: number
      total: number
    }
  }

  export interface Get_post {
    type: FrontReduxType.GET_POST
    key: number | string
  }

  export interface Response_post {
    type: FrontReduxType.RESPONSE_POST;
    data: Post
  }

  export interface GET_Category {
    type: FrontReduxType.GET_CATEGORY
    userid: number
    query: any
  }

  export interface Response_Category {
    type: FrontReduxType.RESPONSE_CATEGORY
    data: any
  }

  export interface GET_Category_Posts {
    type: FrontReduxType.GET_CATEGORY_POSTS
    cid: number
  }

  export interface Response_Category_Posts {
    type: FrontReduxType.RESPONSE_CATEGORY_POSTS
    data: any
  }

  export interface GET_Category_Index {
    type: FrontReduxType.GET_CATEGORY_INDEX
    userid: number
    query: any
  }

  export interface Response_Category_Index {
    type: FrontReduxType.RESPONSE_CATEGORY_INDEX
    category_posts: Category_posts[]
    categories: Category[]
  }

  //------------tags
  export interface GET_Tag {
    type: FrontReduxType.GET_TAG
    tid: number
    query: any
  }

  export interface Response_Tag {
    type: FrontReduxType.RESPONSE_TAG
    tag: Tag
  }

  export interface GET_Tags_Action {
    type: FrontReduxType.GET_TAGS
    userid: number
    query: any
  }

  export interface Response_Tags {
    type: FrontReduxType.RESPONSE_TAGS
    tags: Tag[]
  }

  export interface GET_Tag_Posts {
    type: FrontReduxType.GET_TAG_POSTS
    key: number | string
  }

  export interface Response_Tag_Posts {
    type: FrontReduxType.RESPONSE_TAG_POSTS
    posts: Post[]
  }
}

export namespace FrontActionCreator {
  export function get_posts(userId: number, query: any = null): FrontActions.Get_posts {
    return {
      type: FrontReduxType.GET_POSTS,
      userId,
      query
    }
  }

  export function get_post(key: number | string): FrontActions.Get_post {
    return {
      type: FrontReduxType.GET_POST,
      key
    }
  }

  export function get_category(userid: number, query: any = null): FrontActions.GET_Category {
    return {
      type: FrontReduxType.GET_CATEGORY,
      userid,
      query
    }
  }

  export function get_category_posts(cid: number): FrontActions.GET_Category_Posts {
    return {
      type: FrontReduxType.GET_CATEGORY_POSTS,
      cid
    }
  }

  export function get_category_index(userid: number, query: any = null): FrontActions.GET_Category_Index {
    return {
      type: FrontReduxType.GET_CATEGORY_INDEX,
      userid,
      query
    }
  }

  export function get_tag(tid: number, query: any = null): FrontActions.GET_Tag {
    return {
      type: FrontReduxType.GET_TAG,
      tid,
      query
    }
  }

  export function get_tags(userid: number, query: any = null): FrontActions.GET_Tags_Action {
    return {
      type: FrontReduxType.GET_TAGS,
      userid,
      query
    }
  }

  export function get_tag_posts(key: number | string): FrontActions.GET_Tag_Posts {
    return {
      type: FrontReduxType.GET_TAG_POSTS,
      key
    }
  }

}

//======================================================================reducers
export function front(state: Front = frontState, action: ResponseAction) {
  switch (action.type) {
    case FrontReduxType.RESPONSE_POSTS:
      return { ...state, postList: action.data, pageNum: action.data.pageNum, total: action.data.total };
    case FrontReduxType.RESPONSE_POST:
      return { ...state, postDetail: action.data };
    case FrontReduxType.RESPONSE_CATEGORY_INDEX:
      return { ...state, categories: action.categories, category_posts: action.category_posts }
    case FrontReduxType.RESPONSE_TAGS:
      return { ...state, tags: action.tags }
    case FrontReduxType.RESPONSE_TAG_POSTS:
      return { ...state, tag_posts: action.posts }
    case FrontReduxType.RESPONSE_TAG:
      return { ...state, tag: action.tag }
    default:
      return state;
  }
}

export let frontState: Front = {
  category_posts: [],
  categories: [],
  postList: [],
  postDetail: null,
  pageNum: 1,
  total: 0,
  tags: null,
  tag_posts: null,
  archives: null
};