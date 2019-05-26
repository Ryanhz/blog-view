
import { fork, all } from 'redux-saga/effects'
import { watchUser,
   watchPostDetails, watchPostList,
    watchMainInfo,
    watchCategoryList, watchCategoryPosts
  } from "./watch";

// 3. our root saga: single entry point to start our sagas at once
export default function* rootSaga() {

  yield all([
    watchMainInfo(),
    watchUser(),
    watchPostDetails(),
    watchPostList(),
    watchCategoryList(),
    watchCategoryPosts()
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