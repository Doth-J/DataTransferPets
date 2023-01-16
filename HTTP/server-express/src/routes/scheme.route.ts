import {Router} from "express";

// Create a new Router object from Express 
const scheme = Router();

// Define routes using the methods of the Router object
scheme.get(
    '/', // The URL route which this method will listen for
    (
        request, // The Request object of the route
        response // The Response object of the route
    )=>{ 
        /* Code to do something with this GET route */
})
scheme.post('/',(request,response)=>{
        /* Code to do something with this POST route */
})
scheme.patch('/',(request,response)=>{
        /* Code to do something with this PATCH route */
})
scheme.delete('/',(request,response)=>{
        /* Code to do something with this DELETE route */
})

export {scheme as schemeRoute}