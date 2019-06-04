import { Global, BaseState, Front } from "./../types";

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  user: {
    sex: "",
    id: 5000,
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

export let frontState: Front = {
  category_posts: [],
  categories: [],
  postList: [],
  postDetail: null,
  pageNum: 1,
  total: 0,
  tags: null,
  tag_posts: null,
  archives: null
};

export let initState: BaseState = {
  globalState,
  frontState: frontState,
}