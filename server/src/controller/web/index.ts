import Router from "koa-router";

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

router.get("/", (ctx, next) => {

  // ctx.body = ctx.querystring.toString();
  ctx.body = `
  <h2>This is demo2</h2>
  <form method="post" action="/api/v1/account/sign">
      <p>username:</p>
      <input name="username">
      <p>age:</p>
      <input name="age">
      <p>website</p>
      <input name="website">
      <button type="submit">submit</button>                   
  </form>
  `
});

export default router;

