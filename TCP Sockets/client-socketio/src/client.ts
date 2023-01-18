import { io,Socket } from "socket.io-client";
import { Socket2Server,Server2Socket } from "./events";
import { logger } from "./utils";

const socket:Socket<Server2Socket,Socket2Server> = io("http://localhost:3959");

socket.on('send',(message)=>{
    logger("[>] Message Received","- Message:"+message);
})

const handleUserInput = (socket:Socket<Server2Socket,Socket2Server>) => {
    const stdin = process.openStdin();
    let sub = false;
    
    stdin.on('data',data=>{
        const command = data.toString().split(' ').map((subcommand:string)=>{
            if(subcommand.includes('\r\n')){
                return subcommand.substring(0,subcommand.length-2);
            }else{
                return subcommand
            }
        });

        switch(command[0]){
            case "send":{
                const message = command.slice(2,command.length).join(" ");
                socket.emit('send',command[1],message);
                logger("[<] Sent Message","- Message:"+message);
                break;
            }
            case "join":{
                socket.emit('joinRoom',command[1]);
                break;
            }
            case "leave":{
                socket.emit('leaveRoom',command[1]);
                break;
            }
            case "room":{
                const message = command.slice(2,command.length).join(" ");
                socket.emit("toRoom",command[1],message);
                break;
            }
        }
    })
}

handleUserInput(socket);
socket.on('connect',()=>logger("[!] Socket status","- ID: "+socket.id,"- Connected: "+socket.connected));