import { Post, Global, BaseState } from "./../types";

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  user: {
    sex: "",
    id: 0,
    name: "",
    nickName: "",
    leve: "",
    state: "",
    signature: "",
    email: null,
    avatar: null,
    rights: null,
    birthday: "",
    phone: null
  },
  postCount: 0,
  categoryCount: 0,
  tagCount: 0,
  socials: []
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