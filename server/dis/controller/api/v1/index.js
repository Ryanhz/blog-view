"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const account_1 = __importDefault(require("./account"));
const art_1 = __importDefault(require("./art"));
const router = new koa_router_1.default();
//el/api/v1/account/
router.use("/account", account_1.default);
router.use("/art", art_1.default);
exports.default = router.routes();
//# sourceMappingURL=index.js.map