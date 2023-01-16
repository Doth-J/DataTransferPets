import {Request, Response, NextFunction} from 'express';


export function schemeMiddleware(
    request:Request, // The Request object of a Route
    response:Response, // The Response object of a Route
    next: NextFunction // The next function to proceed the communication flow
    ){

    /* Code to do stuff with request and response objects */

    // Once the middleware operations are complete, always call the next function.
    next();
}