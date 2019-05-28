import { put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import { API } from "../fetch/api";
import * as FrontActionTypes from '@Redux/constants/front'
import { get_post_list } from '@Redux/actions/front'
import {
  GET_detail_Action, Response_Post_detail_Action,
  GET_list_Action, Response_list_Action,
  GET_Category_Action, Response_Category_Action,
  GET_Category_Posts_Action, Response_Category_Posts_Action, GET_Category_Index_Action, Response_Category_Index_Action
} from "@Redux/actions/front";

import { SET_msg_Action, FETCH_Action } from "@Redux/actions/global";
import { func } from 'prop-types';

export function* postList(action: GET_list_Action) {
  let data = yield call(get, `${API.users}/${action.userId}${API.posts}`, action.query)
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_POST_LIST, data: data } as Response_list_Action);
  }
}

export function* postDetails(action: GET_detail_Action) {
  let data = yield call(get, `${API.posts}/${action.pid}`);
  if (data) {
    data.content = decodeURI(data.content)
    yield put({ type: FrontActionTypes.RESPONSE_POST_DETAIL, data: data } as Response_Post_detail_Action);
  }
}

export function* initPost(userId: number) {
  let action: GET_list_Action = yield call(get_post_list, userId, { fields: 'id,user_id,title,views,cover,digest,createdAt,updatedAt' })
  yield put(action)
}


export function* category(action: GET_Category_Action) {
  let data = yield call(get, `${API.users}/${action.userid}${API.categories}`, action.query);
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY, data: data } as Response_Category_Action);
  }
}

export function* category_posts(action: GET_Category_Posts_Action) {
  let res = yield call(get, `${API.posts}/${action.userid}/${action.cid}`);
  if (res && res.status.code === 0) {
    let data = res.data
    data.content = decodeURI(data.content)
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY_POSTS, data: data } as Response_Category_Posts_Action);
  }
}

export function* category_index(action: GET_Category_Index_Action) {
  let data = yield call(get, `${API.categories}/${action.userid}`, action.query);
  if (data) {
    let categories = data.map((item: { cactegory: any, posts: any }) => item.cactegory)
    let posts = data.map((item: { cactegory: any, posts: any }) => item.posts)
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY_INDEX, categories: categories, category_posts: posts } as Response_Category_Index_Action);
  }
}