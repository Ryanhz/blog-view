/*
* Filename: /Users/hzf/Documents/hzy-private/blog-view/src/types/index.tsx
* Path: /Users/hzf/Documents/hzy-private/blog-view
* Created Date: Monday, May 13th 2019, 5:43:45 pm
* Author: hzf
* 
* Copyright (c) 2019 Your Company
*/

export interface Post {
  id: number
  user_id?: number
  cover?: string
  title: string
  digest?: string
  updatedAt?: string
  createdAt?: string
  content?: string
  [propName: string]: any
}

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

export interface Social {
  id: number,
  name: string,
  alias?: string,
  icon?: string,
  link?: string,
  des?: string
}

export interface Category {
  name: string
  id: number
  alias: string
  [propName: string]: any
}

export interface Category_posts {
  categoryid: number
  posts: Post[]
}

export interface Tag {
  name: string
  id: number
  alias: string
  [propName: string]: any
}

export interface Tag_posts {
  categoryid: number
  posts: Post[]
}