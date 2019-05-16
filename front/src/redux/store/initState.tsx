import { Post, Global } from "./../types";

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  userInfo: {
    nickname: "",
    avatar: "",
    phone: "",
    userId: "",
    email: "",
    birthday: "",
    createdAt: "",
  }
}

export let frontState: Post = {
  category: [],
  postList: [],
  postDetail: {},
  pageNum: 1,
  total: 0
};