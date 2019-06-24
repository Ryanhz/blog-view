import { put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import { API } from "../fetch/api";
import * as FrontActionTypes from '@Redux/constants/front'
import { get_posts } from '@Redux/actions/front'
import { Category, Category_posts, Post, Tag } from "@Types/index";
import {
  GET_Post_Action, Response_Post_Action,
  GET_Posts_Action, Response_Posts_Action,
  GET_Category_Action, Response_Category_Action,
  GET_Category_Posts_Action, Response_Category_Posts_Action, GET_Category_Index_Action, Response_Category_Index_Action
  , GET_Tag_Posts_Action, Response_Tag_Posts_Action,
  GET_Tags_Action, Response_Tags_Action,
  GET_Tag_Action, Response_Tag_Action
} from "@Redux/actions/front";

import { SET_msg_Action, FETCH_Action } from "@Redux/actions/global";
import { func } from 'prop-types';

export function* postList(action: GET_Posts_Action) {
  let data = yield call(get, `${API.posts}`, action.query)
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_POSTS, data: data } as Response_Posts_Action);
  }
}

export function* postDetails(action: GET_Post_Action) {
  let data = yield call(get, `${API.posts}/${action.key}`);
  if (data) {
    data.content = decodeURI(data.content)
    yield put({ type: FrontActionTypes.RESPONSE_POST, data: data } as Response_Post_Action);
  }
}

export function* initPost(userId: number) {
  let action: GET_Posts_Action = yield call(get_posts, userId, { fields: 'id,user_id,title,views,cover,digest,createdAt,updatedAt' })
  yield put(action)
}

export function* category(action: GET_Category_Action) {
  let data = yield call(get, `${API.categories}`, action.query);
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY, data: data } as Response_Category_Action);
  }
}

export function* category_posts(action: GET_Category_Posts_Action) {
  let res = yield call(get, `${API.categories}${action.cid}/posts`);
  if (res && res.status.code === 0) {
    let data = res.data
    data.content = decodeURI(data.content)
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY_POSTS, data: data } as Response_Category_Posts_Action);
  }
}

export function* category_index(action: GET_Category_Index_Action) {
  let data = yield call(get, `${API.categories}/page`, action.query);
  if (data) {
    let categories: Category[] = data.map((item: { cactegory: Category, posts: any }) => item.cactegory)
    let posts: Category_posts[] = data.map((item: { cactegory: Category, posts: any }) => {
      return { categoryid: item.cactegory.id, posts: item.posts } as Category_posts
    })
    yield put({ type: FrontActionTypes.RESPONSE_CATEGORY_INDEX, categories: categories, category_posts: posts } as Response_Category_Index_Action);
  }
}

//=========================tag

export function* tag(action: GET_Tag_Action) {
  let data: Tag = yield call(get, `${API.tags}/${action.tid}`, action.query);
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_TAG, tag: data } as Response_Tag_Action);
  }
}

export function* tags(action: GET_Tags_Action) {
  let data: Tag[] = yield call(get, `${API.tags}`, action.query);
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_TAGS, tags: data } as Response_Tags_Action);
  }
}

export function* tag_posts(action: GET_Tag_Posts_Action) {
  let data: Post[] = yield call(get, `${API.tags}/${action.key}/posts`);
  if (data) {
    yield put({ type: FrontActionTypes.RESPONSE_TAG_POSTS, posts: data } as Response_Tag_Posts_Action);
  }
}
