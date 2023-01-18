import { Server,Socket } from "socket.io";
import { Socket2Server,Server2Socket, ServerSocketData, InterServer } from "../events";
import { logger } from "../utils";

export const handleReservedEvents = (io:Server<Socket2Server,Server2Socket,InterServer,ServerSocketData>) => {
    io.on("connection",(socket)=>{
        
        logger("[+] Socket connected","+ Socket: "+socket.id);
        
        socket.on("disconnect",(reason)=>{
            logger("[-] Socket disconnected","- Socket: "+socket.id,"- Reason: "+reason.toString());
        })

        socket.on("disconnecting",()=>{
            logger("[v] Socket disconnecting","- Socket: "+socket.id,"- Rooms: "+socket.rooms);
        })

        socket.on('error',(error)=>{
            logger("[!] Socket error","- Socket: "+socket.id,"- Error Name: "+error.name,"- Error Message: "+error.message,"- Stack: "+error.stack);
        })
    })
    
}

export const handleSocket = (io:Server<Socket2Server,Server2Socket,InterServer,ServerSocketData>, callback:(socket:Socket<Socket2Server,Server2Socket,ServerSocketData>)=>void | object) => {
    io.on("connection",(socket)=>{
        callback(socket);
    })
}