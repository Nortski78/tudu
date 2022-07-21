import { Event } from "./event.js";

let events = [];

const publish = (eventName, data) => {
    
    /* if(data) {console.log(typeof(data))};  
    if(data) {console.log(data.getTitle())};    
    if(data) {console.log(data.getDescription())};  
    if(data) {console.log(data.getPriority())};  
    if(data) {console.log(data.getDueDate())};  */ 

    if(!(eventName in events)) {
        events[eventName] = Event(eventName);
    }
    events[eventName].fireHandlers(data);
}

const subscribe = (eventName, callback) => {
    
    if(!(eventName in events)) {
        events[eventName] = Event(eventName);
    }

    events[eventName].addHandler(callback);
}

const getEvents = () => events;

export {publish, subscribe, getEvents};