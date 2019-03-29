export interface StoreState {
  account: Account
}

export interface Account {
  didsignIn: boolean
  user: User
}

export interface User {
  nickname: string,
  profile_photo: string,
  phone: string,
  userId: string,
  email: string,
  birthday: string,
  registration_time: string,
}

export interface Post {
  category: [any],
  articleList: [any],
  articleDetail: any,
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