import Router from "koa-router";
import account from "./account";
import Post from './post';
import user from "./user";
import Main from "./main";
import Category from "./category";

const router = new Router();

//api/v1/account/
router.use("/account", account);
router.use("/post", Post)
router.use("/user", user)
router.use("/mainInfo", Main);
router.use('/category', Category)
export default router.routes();
