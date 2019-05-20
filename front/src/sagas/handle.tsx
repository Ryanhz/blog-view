import { put } from 'redux-saga/effects'
import { SET_MESSAGE, FETCH_START, FETCH_END } from '@Redux/constants/global'
import { SET_msg_Action, FETCH_Action, Global_Requset_Action } from "@Redux/actions/global";
import { RequsetAction } from "@Redux/actions/front";
import { sagasActionMap } from "./sagasActionMap";

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