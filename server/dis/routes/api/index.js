"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const index_1 = __importDefault(require("./v1/index"));
const v2_1 = __importDefault(require("./v2"));
const router = new koa_router_1.default();
// el/api
router.use("/v1", index_1.default);
router.use("/v2", v2_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map