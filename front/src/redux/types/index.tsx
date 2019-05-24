import { Post_cardable, Post_Details } from "@Types/index";

export interface User {
  sex: string,
  id: number,
  name: string,
  nickName?: string,
  leve: string,
  state: string,
  signature: string,
  email?: string,
  avatar?: string,
  rights: string,
  birthday?: string,
  phone?: string

}

export interface Socials {
  id: number,
  name: string,
  alias?: string,
  icon?: string,
  link?: string,
  des?: string
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
  user: User,
  postCount: number,
  categoryCount: number,
  tagCount: number
  socials?: Socials[]
}

export interface BaseState {
  globalState: Global,
  frontState: Post,
}