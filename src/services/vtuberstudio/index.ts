import { EventEmitter, WebSocket, MessageEvent } from 'ws';

import icon from './icon';

import Logger from '../logger';
export default class VTuberStudioWS extends EventEmitter {
    ws: WebSocket;
    log: Logger = new Logger("VTuberStudio");

    url: string;
    token: string;

    is_connected: boolean = false;

    constructor(url: string){
        super();

        this.url = url; 
    }

    connect(){
        this.log.warn("Connecting to VTuber Studio...")

        this.ws = new WebSocket(this.url)
        this.ws.onopen = this.ready.bind(this)
        this.ws.onmessage = this.message.bind(this)
        this.ws.onclose = this.disconnect.bind(this)
    }

    ready(){
        this.log.success("Connected to VTuber Studio")
        this.log.warn("Please accept plugin to continue")

        this.sendJSON("AuthenticationTokenRequest", {
            pluginName: "KafuneLink",
            pluginDeveloper: "Kafune",
            pluginIcon: icon.icon
        })
    }

    message(message: MessageEvent){
        // Parse JSON
        const data = JSON.parse(message.data.toString())

        switch(data.messageType){
            case "AuthenticationTokenResponse":
                this.log.success("Authenticated to VTuber Studio")
                this.log.warn("Logging in...")
                this.token = data.data.authenticationToken;

                this.sendJSON("AuthenticationRequest", {
                    pluginName: "KafuneLink",
                    pluginDeveloper: "Kafune",
                    authenticationToken: this.token
                })
                break;
            case "AuthenticationResponse":
                this.log.success("Logged in to VTuber Studio")
                this.is_connected = true;
                this.emit("ready")
                if(data.data.authenticated){
                    break;
                }
            case "APIError":
                this.log.error("VTuber Studio Error: " + data.data.message)
                this.ws.close()
                this.emit("authenticationFailed")
                break;
        }
    }

    disconnect(){
        this.log.error("Disconnected from  VTuber Studio. Exiting...")
        this.ws.close()
    }

    reaction(expression: string, enabled: boolean = false){
        this.sendJSON("ExpressionActivationRequest", {
            expressionFile: expression,
            active: enabled
        })
    }

    private sendJSON(type: string, data: object | any[]){
        this.ws.send(JSON.stringify({
            apiName: "VTubeStudioPublicAPI",
            apiVersion: "1.0",
            requestID: "1",
            messageType: type,
            data: data
        }))
    }
}