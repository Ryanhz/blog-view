import path from 'path';
import Koa from 'koa';
import koaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser'
import ZYResponse from './utils/koa-response'
import info from "./middlewares/info";
import cors from "./middlewares/cors";
import errorHandler from "./middlewares/errorHandler";
import router from "./controller/index";


const server = new Koa();
// //1.应用级中间件
server.use(bodyParser());

server.use(info);

server.use(ZYResponse.middleware());

server.use(cors());//跨域

// //2.路由中间件
server.use(router.routes());

// //3.第三方中间件
server.use(koaStatic(path.join(__dirname, '..', "public")));

// //4.错误中间件
server.use(errorHandler);

export default server;