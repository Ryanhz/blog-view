import * as Front from '../constants/front';

export interface GET_list_Action {
  type: Front.GET_POST_LIST;
  tag: string
  pageNum: string
}

export interface GET_detail_Action {
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

export type RequsetAction = GET_list_Action | GET_detail_Action
export type ResponseAction = Response_list_Action | Response_detail_Action

export function get_post_list(tag: string, pageNum: string): GET_list_Action {
  return {
    type: Front.GET_POST_LIST,
    pageNum,
    tag
  }
}

export function get_post_detail(id: string): GET_detail_Action {
  return {
    type: Front.GET_POST_DETAIL,
    id
  }
}



export const Request = {
  get_post_list,
  get_post_detail,
}
