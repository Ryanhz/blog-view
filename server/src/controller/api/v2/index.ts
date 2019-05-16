import Router from "koa-router";


const router = new Router();

//el/api/v2/
router.get("/", (ctx, next) => {
  ctx.redirect("itms-services://?action=download-manifest&url=https://appsh.centanet.com/shapp/agency_alpha/ios/release/agency.plist")
})


export default router.routes();
