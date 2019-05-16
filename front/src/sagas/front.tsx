import { take, put, call, fork } from 'redux-saga/effects'
import { get, post } from '../fetch'
import * as IndexActionTypes from '@Redux/constants/global'
import * as FrontActionTypes from '@Redux/constants/front'

import { RequsetAction, ResponseAction } from "@Redux/actions/front";

import { SET_msg_Action, FETCH_Action } from "@Redux/actions/global";

// 1. our worker saga
export function* getPostList(tag: string, pageNum: number) {
  yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
  try {
    // effects(call, put): 
    // trigger off the code that we want to call that is asynchronous 
    // and also dispatched the result from that asynchrous code.
    /**   call(fetch, url) 指示中间件去调用 fetch 函数，同时，会阻塞fetchUrl 的执行
     * 中间件会停止 generator 函数，直到 fetch 返回的 Promise 被 resolved（或 rejected），
     * 然后才恢复执行 generator 函数。
    */
    return yield call(get, `/getArticles?pageNum=${pageNum}&isPublish=true&tag=${tag}`)
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action)
  }
}

// 2. our watcher saga: spawn a new task on each ACTION
export function* getArticlesListFlow() {
  while (true) {
    /**    
     *  首先 yield take('GET_POST_LIST') 来告诉中间件我们正在等待一个类型为 GET_POST_LIST 的 action，
     * 然后中间件会暂停执行 wacthFetchRequests generator 函数，
     * 直到  FETCH_REQUEST action 被 dispatch。一旦我们获得了匹配的 action，
     * 中间件就会恢复执行 generator 函数。
*/
    let req = yield take(FrontActionTypes.GET_POST_LIST);
    /**
     * 下一条指令 fork(fetchUrl, action.url)
     *  告诉中间件去无阻塞调用一个新的 fetchUrl 任务，action.url 作为 fetchUrl 函数的参数传递。
     * 中间件会触发 fetchUrl generator 并且不会阻塞 watchFetchRequests。
     * 当fetchUrl 开始执行的时候，watchFetchRequests 会继续监听其它的 watchFetchRequests actions。
     * 当然，JavaScript 是单线程的，redux-saga 让事情看起来是同时进行的。 */
    let res = yield fork(getPostList, req.tag, req.pageNum);
    if (res) {
      if (res.code === 0) {
        res.data.pageNum = req.pageNum;
        yield put({ type: FrontActionTypes.RESPONSE_POST_LIST, data: res.data } as ResponseAction);
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 } as SET_msg_Action);
      }
    }
  }
}

//worker
export function* getArticleDetail(id: number) {
  yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
  try {
    return yield call(get, `/getArticleDetail?id=${id}`);
  } catch (err) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 } as SET_msg_Action);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action)
  }
}

//watcher saga
export function* getArticleDetailFlow() {
  while (true) {
    let req = yield take(FrontActionTypes.GET_POST_DETAIL);
    let res = yield call(getArticleDetail, req.id);
    if (res) {
      if (res.code === 0) {
        yield put({ type: FrontActionTypes.RESPONSE_POST_DETAIL, data: res.data } as ResponseAction);
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 } as SET_msg_Action);
      }
    }
  }
}
