import { Post, Global } from "./../types";

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  userInfo: {
    nickname: "",
    profile_photo: "",
    phone: "",
    userId: "",
    email: "",
    birthday: "",
    registration_time: "",
  }
}

export let frontState: Post = {
  category: [],
  postList: [],
  postDetail: {},
  pageNum: 1,
  total: 0
};