import { ResponseAction } from '../actions/front';
import { Front } from '../types/index';
import * as  Types from '../constants/front';
import { frontState } from "../store/initState";

export function front(state: Front = frontState, action: ResponseAction) {
  switch (action.type) {
    case Types.RESPONSE_POSTS:
      return { ...state, postList: action.data, pageNum: action.data.pageNum, total: action.data.total };
    case Types.RESPONSE_POST:
      return { ...state, postDetail: action.data };
    case Types.RESPONSE_CATEGORY_INDEX:
      return { ...state, categories: action.categories, category_posts: action.category_posts }
    case Types.RESPONSE_TAGS:
      return { ...state, tags: action.tags }
    case Types.RESPONSE_TAG_POSTS:
      return { ...state, tag_posts: action.posts }
      case Types.RESPONSE_TAG:
        return {...state, tag:action.tag}
    default:
      return state;
  }
} 