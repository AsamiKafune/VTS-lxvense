const fs = require("fs")

module.exports = (streamlabs, intiface, vtubeStudio) => {
    console.log("[logs] waiting for connect someting")

    vtubeStudio.on("message", data => {
        data = JSON.parse(data)
        if(data.messageType === "AuthenticationTokenResponse")
        {   
            vtubeStudio.send(JSON.stringify({
                "apiName": "VTubeStudioPublicAPI",
                "apiVersion": "1.0",
                "requestID": "1",
                "messageType": "AuthenticationRequest",
                "data": {
                    "pluginName": "KafuneLink",
                    "pluginDeveloper": "Kafune",
                    "authenticationToken": data.data.authenticationToken
                }
            }))
            console.log("[Logs] VtubeStudio server => wait for api!")
        }else if(data.messageType === "AuthenticationResponse"){
            if(data.data.authenticated) return console.log("[Logs] VtubeStudio server => Logged in!")  
        }else{
            if(data.data?.errorID === 50){
                console.log("[Logs] User has denied API access | restart app and try again")
                process.exit()
            }
        }
    })

    intiface.on('message', (data) => { 
        data = JSON.parse(data)
        if(data[0]?.ServerInfo?.ServerName === "Intiface Server"){
            intiface.send(JSON.stringify([{ RequestDeviceList: { Id: 2 } }]))
            console.log("[Logs] intiface server => has now connected!")
        }else{
            const db = JSON.parse(fs.readFileSync("./db.json"))
            if(db.toyCount === 0)
            {
                db.toyCount = data[0].DeviceList.Devices.length
                fs.writeFileSync("./db.json", JSON.stringify(db), "utf8")
                return console.log("[Logs] intiface server => toy active ("+ data[0].DeviceList.Devices.length +")!")
            }
        }
    })

    streamlabs.on("connect", () => {
        console.log("[Logs] streamlabs server => has now connected!")
    })
}
