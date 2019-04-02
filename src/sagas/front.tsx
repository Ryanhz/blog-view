import { take, put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import * as IndexActionTypes from '@Redux/constants/global'
import * as FrontActionTypes from '@Redux/constants/front'

import { PostAction, } from "@Redux/actions/front";

import { GlobalAction, SET_msg_Action, FETCH_Action } from "@Redux/actions/global";

export function* getPostList(tag: string, pageNum: number) {
  yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
  try {
    return yield call(get, `/getArticles?pageNum=${pageNum}&isPublish=true&tag=${tag}`)
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action)
  }
}

export function* getArticlesListFlow() {
  while (true) {
    let req = yield take(FrontActionTypes.GET_POST_LIST);
    let res = yield call(getPostList, req.tag, req.pageNum);
    if (res) {
      if (res.code === 0) {
        res.data.pageNum = req.pageNum;
        yield put({ type: FrontActionTypes.RESPONSE_POST_LIST, data: res.data } as PostAction);
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 } as GlobalAction);
      }
    }
  }
}

export function* getArticleDetail(id: number) {
  yield put({ type: IndexActionTypes.FETCH_START } as GlobalAction);
  try {
    return yield call(get, `/getArticleDetail?id=${id}`);
  } catch (err) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as GlobalAction);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as GlobalAction)
  }
}


export function* getArticleDetailFlow() {
  while (true) {
    let req = yield take(FrontActionTypes.GET_POST_DETAIL);
    let res = yield call(getArticleDetail, req.id);
    if (res) {
      if (res.code === 0) {
        yield put({ type: FrontActionTypes.RESPONSE_POST_DETAIL, data: res.data } as PostAction);
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 } as GlobalAction);
      }
    }
  }
}
