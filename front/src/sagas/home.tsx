import { put, take, call, fork } from 'redux-saga/effects'
import { get, post } from '../fetch'
import * as IndexActionTypes from '@Redux/constants/global'
import { GlobalAction } from "@Redux/actions/global";


export function* login(username: string, password: string) {
  console.log(username, password)
  yield put({ type: IndexActionTypes.FETCH_START } as GlobalAction);
  try {
    return yield call(post, '/user/login', { username, password })
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '用户名或密码错误', msgType: 0 } as GlobalAction);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as GlobalAction);
  }
}

export function* register(data: any) {
  yield put({ type: IndexActionTypes.FETCH_START } as GlobalAction);
  try {
    return yield call(post, '/user/register', data)
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册失败', msgType: 0 } as GlobalAction);
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END } as GlobalAction);
  }
}

export function* loginFlow() {
  while (true) {
    let request = yield take(IndexActionTypes.SIGNIN);
    let response = yield call(login, request.username, request.password);
    if (response && response.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '登录成功!', msgType: 1 } as GlobalAction);
      yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as GlobalAction)
    }
  }
}

export function* registerFlow() {
  while (true) {
    let request = yield take(IndexActionTypes.USER_REGISTER);
    let response = yield call(register, request.data);
    if (response && response.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as GlobalAction);
      yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as GlobalAction)
    }

  }
}

export function* user_auth() {
  while (true) {
    yield take(IndexActionTypes.USER_AUTH);
    try {
      yield put({ type: IndexActionTypes.FETCH_START } as GlobalAction);
      let response = yield call(get, '/user/userInfo');
      if (response && response.code === 0) {
        yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as GlobalAction)
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put({ type: IndexActionTypes.FETCH_END } as GlobalAction);
    }
  }
}
