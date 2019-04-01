import * as Front from '../constants/front';

export interface Post_list_Action {
  type: Front.GET_POST_LIST;
  tag: string
  pageNum: string
}

export interface Post_detail_Action {
  type: Front.GET_POST_DETAIL;
  id: string
}

export interface Response_detail_Action {
  type: Front.RESPONSE_POST_DETAIL;
  data: any
}

export interface Response_list_Action {
  type: Front.RESPONSE_POST_LIST;
  data: {
    list: any[]
    pageNum: number
    total: number
  }
}

export type PostAction = Post_list_Action | Post_detail_Action | Response_list_Action | Response_detail_Action;

export function post_list(tag: string, pageNum: string): Post_list_Action {
  return {
    type: Front.GET_POST_LIST,
    pageNum,
    tag
  }
}

export function post_detail(id: string): Post_detail_Action {
  return {
    type: Front.GET_POST_DETAIL,
    id
  }
}