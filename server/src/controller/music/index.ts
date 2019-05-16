import Router from "koa-router";
import mime from "mime";
import path from "path";
import { fs } from "mz";
const router = new Router();
router.get('*', async (ctx, next) => {
  let vpath = path.join(__dirname, '../../..', 'public', 'A-lin-幸福了然后呢.mp3');
  console.log(vpath)
  let type = mime.getType(vpath)
  ctx.response.type = type || 'video/mp4';
  console.log(type)
  var rs = fs.createReadStream(vpath)
  ctx.body = rs;
  rs.on('end', function () {
    console.log('end call');
  });

})

export default router;