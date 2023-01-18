interface Server2Socket {
    send: (message:string)=>void;
}

interface Socket2Server{
    send: (receiver:string, message:string) => void;
    joinRoom: (room:string) => void;
    leaveRoom: (room:string) => void;
    toRoom: (room:string,message:string) => void;
}

export {
    Server2Socket,
    Socket2Server,
}