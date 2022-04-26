import io from 'socket.io-client';
import { EventEmitter } from 'ws';

import IDonation from './interface/IDonation';

import Logger from '../logger';

export default class StreamLabsWS extends EventEmitter {
    // Services
    ws: io;
    log: Logger = new Logger("Streamlab");

    // User Setting
    token: string;

    // System Setting
    is_connected: boolean = false;

    constructor(token: string){
        super();

        this.token = token;
    }
    
    connect(){
        this.log.warn("Connecting to Streamlabs...")
        this.ws = io(`https://sockets.streamlabs.com?token=${this.token}`, {
            transports: [
                'websocket'
            ],
            reconnection: false
        })
        this.ws.on("connect", this.ready.bind(this))
        this.ws.on("event", this.event.bind(this))
        this.ws.on("disconnect", this.disconnect.bind(this))

        return this
    }

    private ready(){
        this.is_connected = true;
        this.log.success("Connected to Streamlabs")
        this.emit("ready")
    }

    private event(event: {
        type: string;
        event_id: string;
        message: IDonation[],

    }){
        this.emit(event.type, event.message.length > 0 ? event.message[0] : null, this)    
    }

    private disconnect(){
        this.log.error("Disconnected from Streamlabs. Exiting...")
        this.ws.close()
        this.emit("disconnect")
    }
}