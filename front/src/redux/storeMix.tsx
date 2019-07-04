import { User, Social, Post, Category, Category_posts, Tag } from "@Types/index";

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

export interface Front {

  categories: Category[],
  category_posts: Category_posts[]
  tags?: Tag[]
  archives?: Post[]
  tag_posts?: Post[]
  postList: Post[],
  postDetail?: Post,
  pageNum: number,
  total: number,
  tag?:Tag
}

export interface BaseState {
  globalState: Global,
  frontState: Front,
}