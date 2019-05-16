import Router from "koa-router";
import account from "./account";
import art from './art';
import user from "./user";

const router = new Router();

//el/api/v1/account/
router.use("/account", account);
router.use("/art", art)
router.use("/user", user)
router.get("/", (ctx, n) => {
  ctx.body = "v11111"
});
export default router.routes();
