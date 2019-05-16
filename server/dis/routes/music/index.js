"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const mime_1 = __importDefault(require("mime"));
const path_1 = __importDefault(require("path"));
const mz_1 = require("mz");
const router = new koa_router_1.default();
router.get('*', async (ctx, next) => {
    let vpath = path_1.default.join(__dirname, '../../..', 'public', 'A-lin-幸福了然后呢.mp3');
    console.log(vpath);
    let type = mime_1.default.getType(vpath);
    ctx.response.type = type || 'video/mp4';
    console.log(type);
    var rs = mz_1.fs.createReadStream(vpath);
    ctx.body = rs;
    rs.on('end', function () {
        console.log('end call');
    });
});
exports.default = router;
//# sourceMappingURL=index.js.map