import express from "express";
import * as routes from "./routes";

const server = express();
const port = parseInt(process.argv[2]) | 3001;

server.use('/s',routes.schemeRoute);
server.use('/api',routes.apiRoute);
server.use(express.json());

server.listen(port,()=>{console.log("Express listening at:",port)});


