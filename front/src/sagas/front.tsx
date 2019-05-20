import { put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import { API } from "../fetch/api";
import * as FrontActionTypes from '@Redux/constants/front'

import { GET_detail_Action, GET_list_Action, Response_detail_Action, Response_list_Action } from "@Redux/actions/front";

import { SET_msg_Action, FETCH_Action } from "@Redux/actions/global";

export function* postList(action: GET_list_Action) {
  let response = yield call(get, API.list)
  if (response && response.status.code === 0) {
    yield put({ type: FrontActionTypes.RESPONSE_POST_LIST, data: response.data } as Response_list_Action);
  }
}

export function* postDetails(action: GET_detail_Action) {
  let res = yield call(get, API.postDetails, action.id);
  if (res && res.status.code === 0) {
    let data = res.data
    data.content = decodeURI(data.content)
    yield put({ type: FrontActionTypes.RESPONSE_POST_DETAIL, data: data } as Response_detail_Action);
  }
}