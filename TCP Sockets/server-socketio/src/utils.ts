export const stringifier = (obj:object) => JSON.stringify(obj);
export const jsonifier = (str:string) => JSON.parse(str);
export const isJson = (str:string) => {
    try{
        JSON.parse(str);
        return true;
    }catch(e){
        return false;
    }
} 
export const logger = (topic:string,...messages:string[]) =>{
    console.group(topic);
    for(let message of messages){
        console.log(message);
    }
    console.groupEnd();
}