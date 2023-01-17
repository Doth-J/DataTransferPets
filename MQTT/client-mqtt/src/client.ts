import { connectClient, handleUserInput, logger } from "./utils"

const client = connectClient(process.argv[2] || "client", process.argv[3] || "localhost",parseInt(process.argv[4]) || 4001);

handleUserInput(client);

client.on('connect',()=>{
    logger("[*] Client Connection","+ Broker: "+client.options.host,"+ Connected: "+client.connected);
})

client.on('message',(topic, packet)=>{
    logger("[!] Message Received","+ Topic: "+ topic, "+ Message: "+ packet.toString());
})



