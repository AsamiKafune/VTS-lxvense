import { EventEmitter, WebSocket, MessageEvent } from 'ws';
import Logger from '../logger';

export default class IntifaceWS extends EventEmitter {
    ws: WebSocket;
    log: Logger = new Logger("Intiface");

    device_count: number = 0;

    url: string;
    token: string;

    is_connected: boolean = false

    constructor(url: string){
        super();

        this.url = url;
    }

    connect(){
        this.log.warn("Connecting to Intiface...")

        this.ws = new WebSocket(this.url)
        this.ws.onopen = this.ready.bind(this)
        this.ws.onmessage = this.message.bind(this)
        this.ws.onclose = this.disconnect.bind(this)

        return this
    }

    ready(){
        this.log.success("Connected to Intiface")
        
        this.log.warn("Sending request to Intiface...")
        this.sendJSON("RequestServerInfo", {
            Id:1,
            ClientName: "kafune_intiface",
            MessageVersion: 2
        })
    }

    message(message: MessageEvent){
        // Parse JSON
        const data = JSON.parse(message.data.toString())
        
        if(data[0]["ServerInfo"]) {
            this.log.success("Connected to Intiface")
            this.is_connected = true
            
            // Getting device
            this.sendJSON("RequestDeviceList", { Id: 2 })
        }else if(data[0]["DeviceList"]){
            const devices = data[0]["DeviceList"]
            this.device_count = devices.Devices.length
            this.log.info(`Devices found: ${this.device_count} devices`)
            this.emit("ready")
        }
    }

    disconnect(){
        this.log.error("Disconnected from Intiface. Exiting...")
        this.ws.close()
        this.emit("disconnect")
    }

    startDevice(power: number = 0.01){
        for(let i = 0; i < this.device_count; i++){
            this.sendJSON("VibrateCmd", {
                Id: 3,
                DeviceIndex: i,
                Speeds: [{ 
                    Index: i, 
                    Speed: power 
                }]
            })
        }
    }

    private sendJSON(eventName: string, data: object | any[]){
        let json = {}
        json[eventName] = data
        this.ws.send(JSON.stringify([json]))
    }
}