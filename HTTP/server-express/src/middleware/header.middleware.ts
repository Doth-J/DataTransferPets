import {Request, Response, NextFunction} from 'express';

export const setTokenHeader = (request:Request,response:Response,next:NextFunction) =>{
    response.setHeader("X-Token",generateToken(20));
    next();
} 

function generateToken(length:number) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}