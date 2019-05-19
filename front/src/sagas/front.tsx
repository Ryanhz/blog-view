import { take, put, call, fork,takeLatest } from 'redux-saga/effects'
import { get, post } from '../fetch'
import * as IndexActionTypes from '@Redux/constants/global'
import * as FrontActionTypes from '@Redux/constants/front'

import { RequsetAction, ResponseAction, GET_detail_Action } from "@Redux/actions/front";

import { SET_msg_Action, FETCH_Action } from "@Redux/actions/global";
import { API } from "../fetch/api";

// 1. our worker saga
export function* getPostList({tag, pageNum}: any) {
  yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
  try {
    let response = yield call(get, API.list)
    if (response && response.status.code === 0) {
      // yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as SET_msg_Action);
      yield put({ type: FrontActionTypes.RESPONSE_POST_LIST, data: response.data } as ResponseAction);
    }
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action)
  }
}

// 2. our watcher saga: spawn a new task on each ACTION
export function* getArticlesListFlow() {

  yield takeLatest(FrontActionTypes.GET_POST_LIST, getPostList)
}

//worker
export function* getArticleDetail({id}: GET_detail_Action) {
  yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
  try {
    let res = yield call(get, API.postDetails, id);
    if (res && res.status.code === 0) {
      let data = res.data
      data.content = decodeURI(data.content)
      yield put({ type: FrontActionTypes.RESPONSE_POST_DETAIL, data: data } as ResponseAction);
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 } as SET_msg_Action);
    }

  } catch (err) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action)
  }
}

//watcher saga
export function* getArticleDetailFlow() {

  yield takeLatest(FrontActionTypes.GET_POST_DETAIL, getArticleDetail)
}
