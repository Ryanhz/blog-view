import Router from "koa-router";
import Path from "path";
import mime from "mime";
import { fs } from "mz";

const router = new Router();

router.get("/web/:id", (ctx, next) => {

  ctx.body = ctx.params.id;

  // ctx.body = `
  // <h2>This is demo2</h2>
  // <form method="post" action="/api/v1/account/sign">
  //     <p>username:</p>
  //     <input name="username">
  //     <p>age:</p>
  //     <input name="age">
  //     <p>website</p>
  //     <input name="website">
  //     <button type="submit">submit</button>                   
  // </form>
  // `
});

router.get("/",  async(ctx, next) => {

  let vpath = Path.join(__dirname, '../../..', 'public/swagger', 'index.html');
  console.log(vpath)
  let type = mime.getType(vpath)
  ctx.response.type = type || 'text/html';
  console.log(type)
  var rs = fs.createReadStream(vpath)
  ctx.body = rs;
  rs.on('end', function () {
    console.log('end call');
  });

 
});

export default router;

