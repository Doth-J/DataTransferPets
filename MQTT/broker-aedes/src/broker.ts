import Aedes from "aedes";
import { createServer } from "aedes-server-factory";
import { handleDeviceTopic, handleClientConnections, handleClientSubscriptions } from "./config";

const broker = new Aedes();
handleClientSubscriptions(broker);
handleDeviceTopic(broker,'device');
const clients = handleClientConnections(broker);

const port = parseInt(process.argv[2]) | 4001; 
const server = createServer(broker);

server.listen(port,()=>console.log("Aedes listening at:",port))
