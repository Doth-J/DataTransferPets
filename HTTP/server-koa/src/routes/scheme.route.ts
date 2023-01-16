import Router from "koa-router";

// Create a Router object from Koa-Router
const router = new Router();

// Define routes using the methods of the Router object
router.get(
    '/', // The URL route which this method will listen for
    async(ctx,next)=>{
 
    /* Code to do something with this GET route */
    await next();
})
// Define routes using the methods of the Router object
router.post(
    '/', // The URL route which this method will listen for
    async(ctx,next)=>{
 
    /* Code to do something with this POST route */
    await next();
})
// Define routes using the methods of the Router object
router.patch(
    '/', // The URL route which this method will listen for
    async(ctx,next)=>{
 
    /* Code to do something with this PATCH route */
    await next();
})
// Define routes using the methods of the Router object
router.delete(
    '/', // The URL route which this method will listen for
    async(ctx,next)=>{
 
    /* Code to do something with this DELETE route */
    await next();
})

export {router as schemeRoute}