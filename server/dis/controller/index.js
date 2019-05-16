"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const web_1 = __importDefault(require("./web"));
const api_1 = __importDefault(require("./api"));
const music_1 = __importDefault(require("./music"));
//  el/
const router = new koa_router_1.default();
router.use("/api", api_1.default.routes());
router.use("/music", music_1.default.routes());
router.use("", web_1.default.routes());
exports.default = router;
//# sourceMappingURL=index.js.map