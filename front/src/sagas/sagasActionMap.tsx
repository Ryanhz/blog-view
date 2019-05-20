import { GET_USER } from '@Redux/constants/global'
import {
  GET_POST_LIST, GET_POST_DETAIL
} from '@Redux/constants/front'

import { postDetails, postList } from "./front";
import { user } from "./global";

export function sagasActionMap() {
  let map = new Map()
  map.set(GET_USER, user)
  map.set(GET_POST_LIST, postList)
  map.set(GET_POST_DETAIL, postDetails)
  return map
}
