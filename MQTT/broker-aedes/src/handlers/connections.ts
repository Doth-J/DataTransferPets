import Aedes from "aedes";
import { logger } from "../utils";

export const handleClientConnections = (broker:Aedes) =>{
    const clients:string[] = new Array();

    broker.on('client',(client)=>{
        clients.push(client.id);
        logger("[*] Connection Handler","+ New Client Connected: "+client.id);
    });
    
    broker.on('clientDisconnect',(client)=>{
        clients.splice(clients.indexOf(client.id),1);
        logger("[*] Connection Handler","- Client Disconnected: "+client.id);
    })

    return clients;
} 