"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const router = new koa_router_1.default();
//el/api/v2/
router.get("/", (ctx, next) => {
    ctx.redirect("itms-services://?action=download-manifest&url=https://appsh.centanet.com/shapp/agency_alpha/ios/release/agency.plist");
});
exports.default = router.routes();
//# sourceMappingURL=index.js.map