import { Post_cardable , Post_Details} from "@Types/index";

export interface User {
  name:string
  nickName: string,
  avatar: string,
  phone: string,
  userId: string,
  email: string,
  birthday: string,
  createdAt: string,
  signature: string
}

export interface Post {
  category: string[],
  postList: Post_cardable[],
  postDetail?: Post_Details,
  pageNum: number,
  total: number
}

export interface Global {
  isFetching: boolean,
  msg: {
    type: number,//0失败 1成功
    content: string
  },
  userInfo: User
}

export interface BaseState {
  globalState: Global,
  frontState: Post,
}