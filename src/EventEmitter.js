class PubSub{
    constructor(){
        this.events={};
    }
publish(eventName,fn){
 if(!this.events[eventName])this.events[eventName]=[];
 this.events[eventName].push(fn);
}
//call a function published at the given event name
subscribe(eventName,data){
 const event=this.events[eventName];
 if(event) event.map(fun=>fun.call(null,data));
}
    
}

const subscription=  new PubSub();
export default subscription;