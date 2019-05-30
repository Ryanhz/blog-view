import { put, take, call, fork, takeLatest } from 'redux-saga/effects'
import * as IndexActionTypes from '@Redux/constants/global'
import * as FrontActionTypes from '@Redux/constants/front'
import { hander } from "./handle";

export function* watchUser() {
  yield takeLatest(IndexActionTypes.GET_USER, hander)
}

export function* watchMainInfo() {
  yield takeLatest(IndexActionTypes.GET_PROFILE, hander)
}

export function* watchPostList() {
  yield takeLatest(FrontActionTypes.GET_POSTS, hander)
}

export function* watchPostDetails() {
  yield takeLatest(FrontActionTypes.GET_POST, hander)
}

export function* watchCategoryIndex() {
  yield takeLatest(FrontActionTypes.GET_CATEGORY_INDEX, hander)
}

export function* watchCategoryList() {
  yield takeLatest(FrontActionTypes.GET_CATEGORY, hander)
}

export function* watchCategoryPosts() {
  yield takeLatest(FrontActionTypes.GET_CATEGORY_POSTS, hander)
}


export function* watchTags() {
  yield takeLatest(FrontActionTypes.GET_TAGS, hander)
}

export function* watchTagPosts() {
  yield takeLatest(FrontActionTypes.GET_TAG_POSTS, hander)
}
