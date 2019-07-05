import Router from "koa-router";

import v1 from "./v1";
import v2 from "./v2";
import v3 from "./v3";

const router = new Router();
// el/api
router.use("/v1", v1);
router.use("/v2", v2);
router.use("/v3", v3);
router.get("/", (ctx, n) => {
  ctx.body = "api1111"
});
export default router;