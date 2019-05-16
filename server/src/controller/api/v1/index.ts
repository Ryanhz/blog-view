import Router from "koa-router";
import account from "./account";
import art from './art';

const router = new Router();

//el/api/v1/account/
router.use("/account", account);
router.use("/art", art)

export default router.routes();
