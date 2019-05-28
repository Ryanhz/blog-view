import {
  GET_USER,
  GET_PROFILE
} from '@Redux/constants/global'
import {
  GET_POST_LIST,
  GET_POST_DETAIL,
  GET_CATEGORY,
  GET_CATEGORY_POSTS,
  GET_CATEGORY_INDEX
} from '@Redux/constants/front'

import { postDetails, postList, category, category_posts, category_index } from "./front";
import { user, profile } from "./global";

export function sagasActionMap() {
  let map = new Map()
  map.set(GET_USER, user)
  map.set(GET_POST_LIST, postList)
  map.set(GET_POST_DETAIL, postDetails)
  map.set(GET_PROFILE, profile)
  map.set(GET_CATEGORY, category)
  map.set(GET_CATEGORY_POSTS, category_posts)
  map.set(GET_CATEGORY_INDEX, category_index)
  return map
}
