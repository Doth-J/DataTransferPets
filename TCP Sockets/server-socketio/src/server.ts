import { Server } from "socket.io";
import { Socket2Server,Server2Socket, ServerSocketData, InterServer } from "./events";
import { handleReservedEvents,handleSocket } from "./handlers/connections";
import { logger } from "./utils";

const server = new Server<Socket2Server,Server2Socket,InterServer,ServerSocketData>();

handleReservedEvents(server);
handleSocket(server,(socket)=>{

    socket.on('send',(receiver,message)=>{
        logger("[>] Sending Message","- ID: "+socket.id,"- Receiver: "+receiver,"- Message: "+message);
        server.to(receiver).emit('send',message);
    })
    
    socket.on('joinRoom',(room)=>{
        socket.join(room);
        logger("[o] Room Joined","- ID: "+socket.id,"- Room: "+room);
    })
    
    socket.on('leaveRoom',(room)=>{
        socket.leave(room);
        logger("[x] Room Left","- ID: "+socket.id,"- Room: "+room);
    })
    
    socket.on('toRoom',(room,message)=>{
        logger("[@] Sending Room Message","- ID: "+socket.id,"- Room: "+room,"- Message: "+message);
        server.to(room).emit('send',message);
    })
});


server.listen(parseInt(process.argv[2]) || 3959);
console.log("Socket Server started at:",parseInt(process.argv[2]) || 3959);