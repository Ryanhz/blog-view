import Router from "koa-router";
import ZYResponse, { ZYContext, Next } from 'koa-response'
import { fs } from 'mz'
import path from 'path'

class Art {

  static async list(ctx: ZYContext, next: Next) {

    console.log(ctx.request.body);

    let root = path.join(__dirname, '../../public/data');
    let listPath = path.join(root, 'book.json');

    let jsondata = await fs.readFile(listPath);

    let data = jsondata.toString()

    ctx.success(JSON.parse(data))
  }
}

const router = new Router();
router.get("/list", Art.list)

export default router.routes();