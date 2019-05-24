import Router from "koa-router";
import account from "./account";
import art from './art';
import user from "./user";
import Main from "./main";

const router = new Router();

//api/v1/account/
router.use("/account", account);
router.use("/post", art)
router.use("/user", user)
router.use("/mainInfo", Main);
export default router.routes();
