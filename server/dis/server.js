"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const koa_1 = __importDefault(require("koa"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_response_1 = __importDefault(require("./utils/koa-response/koa-response"));
const info_1 = __importDefault(require("./middlewares/info"));
const cors_1 = __importDefault(require("./middlewares/cors"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const index_1 = __importDefault(require("./controller/index"));
const server = new koa_1.default();
// //1.应用级中间件
server.use(koa_bodyparser_1.default());
server.use(info_1.default);
server.use(koa_response_1.default.middleware());
server.use(cors_1.default()); //跨域
// //2.路由中间件
server.use(index_1.default.routes());
// //3.第三方中间件
server.use(koa_static_1.default(path_1.default.join(__dirname, '..', "public")));
// //4.错误中间件
server.use(errorHandler_1.default);
exports.default = server;
//# sourceMappingURL=server.js.map