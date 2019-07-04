import { fork, all, take, put, takeLatest } from 'redux-saga/effects'
import { GlobalReduxType, GlobalActions, Global_Requset_Action } from "@Redux/global";
import { RequsetAction, FrontReduxType } from "@Redux/front";
import { zy_log } from '@Units/index';

import * as FrontHander from "./front";
import * as GlobalHander from "./global";

function sagasActionMap() {
  let map = new Map()
  map.set(GlobalReduxType.GET_USER, GlobalHander.user)
  map.set(GlobalReduxType.GET_PROFILE, GlobalHander.profile)
  map.set(GlobalReduxType.GET_Posts_Count, GlobalHander.postCount)
  map.set(GlobalReduxType.GET_categories_count, GlobalHander.categoryCount)
  map.set(GlobalReduxType.GET_tags_count, GlobalHander.tagCount)
  map.set(GlobalReduxType.GET_Socials, GlobalHander.socials)

  map.set(FrontReduxType.GET_POSTS, FrontHander.postList)
  map.set(FrontReduxType.GET_POST, FrontHander.postDetails)
  map.set(FrontReduxType.GET_CATEGORY, FrontHander.category)
  map.set(FrontReduxType.GET_CATEGORY_POSTS, FrontHander.category_posts)
  map.set(FrontReduxType.GET_CATEGORY_INDEX, FrontHander.category_index)
  map.set(FrontReduxType.GET_TAGS, FrontHander.tags)
  map.set(FrontReduxType.GET_TAG_POSTS, FrontHander.tag_posts)
  map.set(FrontReduxType.GET_TAG, FrontHander.tag)
  return map
}
const map = sagasActionMap()

//1.hander
function* hander(action: Global_Requset_Action | RequsetAction) {

  yield put({ type: GlobalReduxType.FETCH_START } as GlobalActions.FETCH);
  try {
    let func = map.get(action.type)
    yield func(action)
  } catch (error) {
    yield put({ type: GlobalReduxType.SET_MESSAGE, msgContent: `${error}`, msgType: 0 } as GlobalActions.SET_msg);
  } finally {
    yield put({ type: GlobalReduxType.FETCH_END } as GlobalActions.FETCH);
  }
}

///2.watch
function* watchAll() {
  for (const key of map.keys()) {
    zy_log('key-------------' + key);
    yield takeLatest(key, hander)
  }
}

// 3. our root saga: single entry point to start our sagas at once
export default function* rootSaga() {
  yield all([watchAll()])
}