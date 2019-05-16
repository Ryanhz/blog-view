import Router from "koa-router";

import index from "./web"

import api from "./api";

import music from "./music";
//  el/
const router = new Router();

router.use("/api", api.routes());

router.use("/music", music.routes());

router.use("", index.routes());

export default router;
