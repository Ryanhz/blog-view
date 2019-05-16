/*
* Filename: /Users/hzf/Documents/hzy-private/blog-view/src/types/index.tsx
* Path: /Users/hzf/Documents/hzy-private/blog-view
* Created Date: Monday, May 13th 2019, 5:43:45 pm
* Author: hzf
* 
* Copyright (c) 2019 Your Company
*/
export interface Post_cardable {
  id: number
  cover?: string
  title: string
  digest: string
  created: string
  modify: string
  [propName: string]: any

}