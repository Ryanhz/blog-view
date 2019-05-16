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
  category: string[],
  postList: any[],
  postDetail: any,
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
  frontState: Post
}