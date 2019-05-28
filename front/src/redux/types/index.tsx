import { User, Social, Post_cardable, Post_Details, Category, Category_posts } from "@Types/index";

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
  socials?: Social[]
}

export interface Post {

  categories: Category[],
  category_posts: Category_posts[]
  postList: Post_cardable[],
  postDetail?: Post_Details,
  pageNum: number,
  total: number
}

export interface BaseState {
  globalState: Global,
  frontState: Post,
}