import Router from "koa-router";

const router = new Router();

router.get('/v1', async(ctx,next)=>{
    ctx.body = "Hello World";
    await next();
})

router.post('/v1', async(ctx,next)=>{
    ctx.body = ctx.request.body;
    await next();
})

export {router as apiRoute}