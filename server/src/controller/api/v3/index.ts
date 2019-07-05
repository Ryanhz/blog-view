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

//api/v3/account/
router.get("/users", User.some)
router.get("/users/:uid", User.one)
router.post("/users", User.post)
router.get("/master", User.master)

router.get("/users/:uid/profile/", Profile.get);
router.get("/profile", Profile.get);

router.get("/users/:uid/posts", Post.get)
router.get("/posts/:pid", Post.one)

router.get("/categories/:uid", Category.index)
router.get("/users/:uid/categories", Category.get)
router.get("/categories/:cid/posts", Category.posts)


router.get("/tags/:tid", Tag.tag)
router.get("/users/:uid/tags", Tag.tags)
router.get("/tags/:tid/posts", Tag.posts)


// router.use('/category', Category)
export default router.routes();
