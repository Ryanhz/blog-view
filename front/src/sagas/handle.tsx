import { put } from 'redux-saga/effects'
import { SET_MESSAGE, FETCH_START, FETCH_END } from '@Redux/constants/global'
import { SET_msg_Action, FETCH_Action, Global_Requset_Action } from "@Redux/actions/global";
import { RequsetAction } from "@Redux/actions/front";

import * as FrontConstants from '@Redux/constants/front'
import * as GlobalConstants from '@Redux/constants/global'

import * as FrontHander from "./front";
import * as GlobalHander from "./global";

function sagasActionMap() {
  let map = new Map()
  map.set(GlobalConstants.GET_USER, GlobalHander.user)
  map.set(FrontConstants.GET_POSTS, FrontHander.postList)
  map.set(FrontConstants.GET_POST, FrontHander.postDetails)
  map.set(GlobalConstants.GET_PROFILE, GlobalHander.profile)
  map.set(FrontConstants.GET_CATEGORY, FrontHander.category)
  map.set(FrontConstants.GET_CATEGORY_POSTS, FrontHander.category_posts)
  map.set(FrontConstants.GET_CATEGORY_INDEX, FrontHander.category_index)
  map.set(FrontConstants.GET_TAGS, FrontHander.tags)
  map.set(FrontConstants.GET_TAG_POSTS, FrontHander.tag_posts)
  return map
}
let map = sagasActionMap()

export function* hander(action: Global_Requset_Action | RequsetAction) {

  yield put({ type: FETCH_START } as FETCH_Action);
  try {
    let func = map.get(action.type)
    yield func(action)
  } catch (error) {
    yield put({ type: SET_MESSAGE, msgContent: `${error}`, msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: FETCH_END } as FETCH_Action);
  }
}