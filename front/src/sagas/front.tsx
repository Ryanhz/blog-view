import { put, call } from 'redux-saga/effects'
import { get, post } from '../fetch'
import { API } from "../fetch/api";
import { FrontReduxType } from '@Redux/front'
import { FrontActionCreator } from '@Redux/front'
import { Category, Category_posts, Post, Tag } from "@Types/index";
import {
  FrontActions
} from "@Redux/front";

export function* postList(action: FrontActions.Get_posts) {
  let data = yield call(get, `${API.posts}`, action.query)
  if (data) {
    yield put({ type: FrontReduxType.RESPONSE_POSTS, data: data } as FrontActions.Response_posts);
  }
}

export function* postDetails(action: FrontActions.Get_post) {
  let data = yield call(get, `${API.posts}/${action.key}`);
  if (data) {
    data.content = decodeURI(data.content)
    yield put({ type: FrontReduxType.RESPONSE_POST, data: data } as FrontActions.Response_post);
  }
}

export function* initPost(userId: number) {
  let action: FrontActions.Get_posts = yield call(FrontActionCreator.get_posts, userId, { fields: 'id,user_id,title,views,cover,digest,createdAt,updatedAt' })
  yield put(action)
}

export function* category(action: FrontActions.GET_Category) {
  let data = yield call(get, `${API.categories}`, action.query);
  if (data) {
    yield put({ type: FrontReduxType.RESPONSE_CATEGORY, data: data } as FrontActions.Response_Category);
  }
}

export function* category_posts(action: FrontActions.GET_Category_Posts) {
  let res = yield call(get, `${API.categories}${action.cid}/posts`);
  if (res && res.status.code === 0) {
    let data = res.data
    data.content = decodeURI(data.content)
    yield put({ type: FrontReduxType.RESPONSE_CATEGORY_POSTS, data: data } as FrontActions.Response_Category_Posts);
  }
}

export function* category_index(action: FrontActions.GET_Category_Index) {
  let data = yield call(get, `${API.categories}/page`, action.query);
  if (data) {
    let categories: Category[] = data.map((item: { cactegory: Category, posts: any }) => item.cactegory)
    let posts: Category_posts[] = data.map((item: { cactegory: Category, posts: any }) => {
      return { categoryid: item.cactegory.id, posts: item.posts } as Category_posts
    })
    yield put({ type: FrontReduxType.RESPONSE_CATEGORY_INDEX, categories: categories, category_posts: posts } as FrontActions.Response_Category_Index);
  }
}

//=========================tag
export function* tag(action: FrontActions.GET_Tag) {
  let data: Tag = yield call(get, `${API.tags}/${action.tid}`, action.query);
  if (data) {
    yield put({ type: FrontReduxType.RESPONSE_TAG, tag: data } as FrontActions.Response_Tag);
  }
}

export function* tags(action: FrontActions.GET_Tags_Action) {
  let data: Tag[] = yield call(get, `${API.tags}`, action.query);
  if (data) {
    yield put({ type: FrontReduxType.RESPONSE_TAGS, tags: data } as FrontActions.Response_Tags);
  }
}

export function* tag_posts(action: FrontActions.GET_Tag_Posts) {
  let data: Post[] = yield call(get, `${API.tags}/${action.key}/posts`);
  if (data) {
    yield put({ type: FrontReduxType.RESPONSE_TAG_POSTS, posts: data } as FrontActions.Response_Tag_Posts);
  }
}
