import { put, call, take, fork } from 'redux-saga/effects'
import { get, post } from '../fetch'
import { API, serverHost } from "../fetch/api";
import { GlobalReduxType, GlobalActions } from "@Redux/global";
import { User } from '@Types/index';
import { initPost } from "./front";

export function* user(action: GlobalActions.GET_user) {
  let response = yield call(get, API.users + `/${action.id}`)
  if (response) {

    yield put({ type: GlobalReduxType.RESPONSE_USER, data: response } as GlobalActions.RESPONSE_user)
  }
}

export function* categoryCount(action: GlobalActions.GET_categories_count) {
  let response = yield call(get, API.categories + `/${action.uid}`)
  if (response) {

    yield put({ type: GlobalReduxType.RESPONSE_categories_count, data: response } as GlobalActions.RESPONSE_categories_count)
  }
}

export function* socials(action: GlobalActions.GET_Socials) {
  let response = yield call(get, API.socials + `/${action.uid}`)
  if (response) {
    yield put({ type: GlobalReduxType.RESPONSE_Socials, data: response } as GlobalActions.RESPONSE_Socials)
  }
}

export function* tagCount(action: GlobalActions.GET_tags_count) {
  let response = yield call(get, API.tags + `/${action.uid}`)
  if (response) {
    yield put({ type: GlobalReduxType.RESPONSE_tags_count, data: response } as GlobalActions.RESPONSE_tags_count)
  }
}

export function* postCount(action: GlobalActions.GET_Posts_Count) {
  let response = yield call(get, API.posts + `/${action.uid}`)
  if (response) {
    yield put({ type: GlobalReduxType.RESPONSE_Posts_Count, data: response } as GlobalActions.RESPONSE_Posts_Count)
  }
}


export function* profile(action: GlobalActions.GET_Profile) {
  let data = yield call(get, `${API.profile}`)
  if (data) {
    // yield put({ type: SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as SET_msg_Action);
    let user = data.user as User
    user.avatar && (user.avatar = serverHost + user.avatar)
    yield put({
      type: GlobalReduxType.RESPONSE_PROFILE,
      user: data.user,
      socials: data.socials,
      postCount: data.postCount,
      categoryCount: data.categoryCount,
      tagCount: data.tagCount,
    } as GlobalActions.RESPONSE_Profile)

    yield fork(initPost, user.id)
  }
}


// export function* login(username: string, password: string) {
//   // console.log(username, password)
//   yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//   try {
//     return yield call(post, '/user/login', { username, password })
//   } catch (error) {
//     yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '用户名或密码错误', msgType: 0 } as SET_msg_Action);
//   } finally {
//     yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//   }
// }

// export function* register(data: any) {
//   yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//   try {
//     return yield call(post, '/user/register', data)
//   } catch (error) {
//     yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册失败', msgType: 0 } as SET_msg_Action);
//   } finally {
//     yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//   }
// }

// export function* loginFlow() {
//   while (true) {
//     let request = yield take(IndexActionTypes.SIGNIN);
//     let response = yield call(login, request.username, request.password);
//     if (response && response.code === 0) {
//       yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '登录成功!', msgType: 1 } as SET_msg_Action);
//       yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//     }
//   }
// }

// export function* registerFlow() {
//   while (true) {
//     let request = yield take(IndexActionTypes.USER_REGISTER);
//     let response = yield call(register, request.data);
//     if (response && response.code === 0) {
//       yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '注册成功!', msgType: 1 } as SET_msg_Action);
//       yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//     }
//   }
// }

// export function* user_auth() {
//   while (true) {
//     yield take(IndexActionTypes.USER_AUTH);
//     try {
//       yield put({ type: IndexActionTypes.FETCH_START } as FETCH_Action);
//       let response = yield call(get, API.user);
//       if (response && response.code === 0) {
//         yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data } as Global_Response_Action)
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       yield put({ type: IndexActionTypes.FETCH_END } as FETCH_Action);
//     }
//   }
// }
