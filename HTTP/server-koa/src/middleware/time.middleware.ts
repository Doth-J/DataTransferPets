import { ParameterizedContext, Next } from "koa"

export const responseTime = async(ctx:ParameterizedContext, next:Next) =>{
const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
} 