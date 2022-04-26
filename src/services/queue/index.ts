import { TypedEmitter } from 'tiny-typed-emitter';
import {
    IQueueData,
    IQueueEvents,
} from './interface/IQueueEvent';

export default class Queue extends TypedEmitter<IQueueEvents> {
    queue: IQueueData[]
    now_data: IQueueData;

    is_doing: boolean = false;

    constructor() {
        super();
        this.queue = [];
    }
    
    add(data: IQueueData) {  
        this.queue.push(data);
        this.check();
    }

    next(){
        const data = this.queue.shift();
        if(data) {
            this.now_data = data;
            this.is_doing = true;
            this.emit("queue", data, () => this.next())
        }else{
            this.is_doing = false
            this.emit("queueEnd", this.now_data)
            
            // Clear to prevent memory leak
            this.now_data = undefined;
        };
    }

    check() {
        if(this.is_doing) return;
        const data = this.queue.shift();
        if(data) {
            this.now_data = data;
            this.is_doing = true;
            this.emit("queue", data, () => this.next())
        }
    }
}