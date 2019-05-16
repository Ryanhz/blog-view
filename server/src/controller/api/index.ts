import Router from "koa-router";

import v1 from "./v1/index";
import v2 from "./v2";

const router = new Router();
// el/api
router.use("/v1", v1);
router.use("/v2", v2);

export default router;