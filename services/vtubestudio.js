module.exports = (WebSocket, config) => {
    const ws = new WebSocket('ws://127.0.0.1:'+config.vtsport);
    ws.on('open', function open() {
        console.log("[Logs] VTubeStudio server => please accept Plugin!")
        ws.send(JSON.stringify({
            "apiName": "VTubeStudioPublicAPI",
            "apiVersion": "1.0",
            "requestID": "1",
            "messageType": "AuthenticationTokenRequest",
            "data": {
                "pluginName": "KafuneLink",
                "pluginDeveloper": "Kafune",
                "pluginIcon": ""
            }}))
    });

    return ws;
}
