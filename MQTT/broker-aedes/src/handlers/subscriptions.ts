import Aedes from "aedes";
import { logger } from "../utils";

export const handleClientSubscriptions = (broker:Aedes) =>{

    broker.on('subscribe',(subs, client)=>{
        logger("[*] Subscription Handler","+ Subscription Request by: "+client.id, "+ Subscription Topic: "+subs[0].topic);
    });
    
    broker.on('unsubscribe',(topic,client)=>{
        logger("[*] Subscription Handler","- Subscription Request by: "+client.id, "- Unsubscribed from: "+topic[0]);
    })
} 