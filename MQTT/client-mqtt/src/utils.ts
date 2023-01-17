import mqtt from "mqtt";
import { MqttClient } from "mqtt/types/lib/client";

export const connectClient = (id:string,broker:string,port:number, recon:number = 5000) => {
    return mqtt.connect({
        clientId:id,
        host:broker,
        port:port,
        protocol:'mqtt',
        reconnectPeriod: recon
    });
}

export const logger = (topic:string,...messages:string[]) =>{
    console.group(topic);
    for(let message of messages){
        console.log(message);
    }
    console.groupEnd();
}

export const handleUserInput = (client:MqttClient) =>{
    const stdin = process.openStdin();

    stdin.on('data',data=>{
        const command = data.toString().split(' ').map((subcommand:string)=>{
            if(subcommand.includes('\r\n')){
                return subcommand.substring(0,subcommand.length-2);
            }else{
                return subcommand
            }
        });

        switch(command[0]){
            case "publish":{
                const message = command.slice(2,command.length).join(" ");
                client.publish(command[1], message);
                logger("[>] Publishing Message","+ Topic: "+command[1], "+ Message: "+message);
                break;
            }
            case "subscribe":{
                client.subscribe(command[1]);
                logger("[+] Topic Subscription","+ Topic: "+command[1]);
                break;
            }
            case "unsubscribe":{
                client.unsubscribe(command[1]);
                logger("[-] Topic Subscription","- Topic: "+command[1]);
                break;
            }
            default:{
                console.log("Command not recognized!");
            }
        }
    })
}