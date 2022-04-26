import fs from 'fs';
import { resolve } from 'path';
import { EventEmitter } from 'ws';

import StreamLabsWS from './services/streamlab';
import IntifaceWS from './services/initface';
import VTuberStudioWS from './services/vtuberstudio';

import Logger from './services/logger';
import Queue from './services/queue';
import {
    IQueueData
} from './services/queue/interface/IQueueEvent';

import IVTSOptions from './interface/IVTSOptions';

export default class VTS extends EventEmitter {
    // Options
    options: IVTSOptions;

    // Websockets
    streamlabs: StreamLabsWS;
    intiface: IntifaceWS;
    vtuberStudio: VTuberStudioWS;

    // Log
    log: Logger = new Logger("VTS");

    // Queue
    queue: Queue = new Queue()

    constructor(options: IVTSOptions){
        super();

        this.options = options

        this.streamlabs = new StreamLabsWS(options.server.streamlabs.token)
        this.intiface = new IntifaceWS(`ws://${options.server.intiface.host}:${options.server.intiface.port}`)
        this.vtuberStudio = new VTuberStudioWS(`ws://${options.server.vtuberstudio.host}:${options.server.vtuberstudio.port}`)
        
        // Queue evrnts
        this.queue.on("queue", (data: IQueueData, next: () => void) => this.active(data, next))
        this.queue.on("queueEnd", (data: IQueueData) => this.deactive(data))

        // Event of streamlab & intiface
        this.streamlabs.once("ready", () => this.check()) 
        this.intiface.once("ready", () => this.check())
        this.streamlabs.once("disconnect", () => this.kill())
        this.intiface.once("disconnect", () => this.kill())
        
        // Event of vtuberstudio
        this.vtuberStudio.once("authenticationFailed", () => this.kill())
        this.vtuberStudio.once("ready", () => this.check())
    }
    
    start(){ 
        this.log.warn("Starting VTS...")

        // Check if queue delay is shorter than 3 seconds
        if(this.options.queue.delay < 3000){
            this.log.error("Queue delay is shorter than 3 seconds")
            process.exit(1);
        }

        this.streamlabs.connect();
        this.intiface.connect();

        return this
    }

    init(){
        this.log.warn("Loading events...")
        // Events
        const PATH = resolve(__dirname, "./events")
        for(const filename of fs.readdirSync(resolve(__dirname, "./events"))){
            if(filename.endsWith(".ts") || filename.endsWith(".js")){
                const lib = require(resolve(PATH, filename))?.default
                if(lib && lib.enabled){
                    this.streamlabs.on(filename.split(".")[0], (data, streamlab) => lib.run(data, this, streamlab))
                    this.log.success(`Loaded event: ${filename}`)
                }
            }
        }

        this.log.success(`VTS is ready! :) (${performance.now().toFixed(2)}ms)`)
    }

    async check(){
        if(
            this.streamlabs?.is_connected && 
            this.intiface?.is_connected
        ){
            if(!this.vtuberStudio.is_connected) this.vtuberStudio.connect()
            else this.init()
        }
    }

    private async active(data: IQueueData, next: () => void){
        // Start device & reaction vtuber studio
        this.intiface.startDevice(data.power)
        this.vtuberStudio.reaction(data.expression, true)

        // Waiting 
        await new Promise(resolve => setTimeout(resolve, this.options.queue.delay))

        // Clear reaction
        this.vtuberStudio.reaction(data.expression, false)

        // Next queue
        next();
    }

    private async deactive(data: IQueueData){
        // Stop all device & reaction vtuber studio
        this.intiface.startDevice(0)
        this.vtuberStudio.reaction(data.expression, false)
    }

    private kill(){
        process.exit(0);
    }
}