module.exports = (WebSocket, config) => {
    const ws = new WebSocket('ws://127.0.0.1:'+config.intifaceport);
    ws.on('open', function open() {
        ws.send(JSON.stringify([{"RequestServerInfo":{"Id":1,"ClientName":"kafune_intiface","MessageVersion":2}}]));
    });
    
    return ws

}