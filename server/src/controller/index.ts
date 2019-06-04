import Router from "koa-router";

import index from "./web"

import api from "./api";

const router = new Router();

router.use("", api.routes());

router.use("/doc", index.routes());

export default router;
