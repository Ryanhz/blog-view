/*
 * Filename: /Users/hzf/Documents/hzy-private/blog-view/server/src/controller/api/v1/index.ts
 * Path: /Users/hzf/Documents/hzy-private/blog-view/server
 * Created Date: Monday, May 27th 2019, 9:15:51 am
 * Author: hzf
 * 
 * Copyright (c) 2019 Your Company
 */

import Router from "koa-router";
import { postController } from './post';
import { userControl } from "./user";
import Profile from "./profile";
import Category from "./category";
import { tagController } from "./tag";

const router = new Router();

// setTimeout(() => {
//   Profile.get();
// }, (1000));

//api/v3/account/
router.get("/users", userControl.some)
router.get("/users/:uid", userControl.one)
router.post("/users", userControl.post)

router.get("/posts/", postController.get)
router.get("/users/:uid/posts", postController.get)
router.get("/posts/:pid", postController.one)

router.get("/categories/:uid", Category.index)
router.get("/users/:uid/categories", Category.get)
router.get("/categories/:cid/posts", Category.posts)

router.get("/tags/:tid", tagController.tag)
router.get("/users/:uid/tags", tagController.tags)
router.get("/tags/:tid/posts", tagController.posts)


// router.use('/category', Category)
export default router.routes();
