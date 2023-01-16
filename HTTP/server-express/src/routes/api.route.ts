import { Router } from "express";
import { setTokenHeader } from "../middleware";

const api = Router();

api.get('/v1',setTokenHeader,(request,response)=>{
    response.send(request.url);
})

api.post('/v1',(request,response)=>{
    response.json(request.body);
})

export {api as apiRoute}