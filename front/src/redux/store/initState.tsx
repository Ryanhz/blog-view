import { Post, Global, BaseState } from "./../types";

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  userInfo: {
    name: "",
    nickName: "",
    avatar: null,
    phone: "",
    userId: "",
    email: "",
    birthday: "",
    createdAt: "",
    signature: ""
  }
}

export let frontState: Post = {
  category: [],
  postList: [],
  postDetail: null,
  pageNum: 1,
  total: 0
};

export let initState: BaseState = {
  globalState,
  frontState: frontState,
}