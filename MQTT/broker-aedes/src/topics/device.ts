import Aedes from "aedes";
import { PublishPacket } from "packet";
import { logger } from "../utils";

export const handleDeviceTopic = (broker:Aedes, topic:string) =>{
    broker.subscribe(topic,(packet,_)=>{
        logger("[!] Received Message","+ Subscription Topic: "+packet.topic, "+ Received Payload: "+packet.payload.toString());
        if(packet.payload.toString() === "hello"){
            broker.publish(preparePacket(topic,'hello there'),()=>{});
        }
    },()=>{});
}

export const preparePacket = (topic:string, payload: string):PublishPacket =>{
    return{
        topic: topic,
        payload: payload,
        qos:0, 
        dup: false, 
        retain: false, 
        cmd:'publish'
    }
}
