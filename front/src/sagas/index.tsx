
import { fork, all } from 'redux-saga/effects'
import { loginFlow, registerFlow, user_auth, userFlow } from './home'


import { getArticlesListFlow, getArticleDetailFlow } from './front'

// 3. our root saga: single entry point to start our sagas at once
export default function* rootSaga() {
  console.log(`------rootSaga------`)
  yield all([
    userFlow(),
  ])
  // yield loginFlow();
  // yield fork(registerFlow);
  // yield fork(user_auth);
  // yield fork(userFlow)
  // yield fork(get_all_users_flow);
  // yield fork(getAllTagsFlow);
  // yield fork(addTagFlow);
  // yield fork(delTagFlow);
  // yield fork(saveArticleFlow);
  // yield fork(getArticleListFlow);
  // yield fork(deleteArticleFlow);
  // yield fork(getArticlesListFlow);
  // yield fork(getArticleDetailFlow);

}