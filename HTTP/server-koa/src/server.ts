import Koa from "koa";

import json from "koa-json";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";

import { apiRoute,schemeRoute } from "./routes";
import { responseTime } from "./middleware";

const server = new Koa();
const port = parseInt(process.argv[2]) | 3001;

server.use(json());
server.use(responseTime());
server.use(bodyParser());
server.use(logger());

server.use(apiRoute.routes()).use(apiRoute.allowedMethods());
server.use(schemeRoute.routes()).use(schemeRoute.allowedMethods());

server.listen(port,()=> console.log("Koa listening at:",port));