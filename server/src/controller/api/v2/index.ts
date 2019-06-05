/*
 * Filename: /Users/hzf/Documents/hzy-private/blog-view/server/src/controller/api/v1/index.ts
 * Path: /Users/hzf/Documents/hzy-private/blog-view/server
 * Created Date: Monday, May 27th 2019, 9:15:51 am
 * Author: hzf
 * 
 * Copyright (c) 2019 Your Company
 */

import Router from "koa-router";
import Post from './post';
import User from "./user";
import Profile from "./profile";
import Category from "./category";
import Tag from "./tag";

const router = new Router();

//api/v1/account/
router.get("/user", User.get)
router.post("/user", User.post)

router.get("/profile", Profile.default);

router.get("/posts", Post.list)
router.get("/posts/:title", Post.one)

router.get("/categories/page", Category.pages)
router.get("/categories", Category.categories)
router.get("/categories/:cid/posts", Category.posts)


router.get("/tags", Tag.tags)
router.get("/tags/:tid", Tag.tag)
router.get("/tags/:name/posts", Tag.posts)


// router.use('/category', Category)
export default router.routes();
