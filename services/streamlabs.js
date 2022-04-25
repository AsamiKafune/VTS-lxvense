module.exports = (io, config) => {
    const streamlabs = io(`https://sockets.streamlabs.com?token=${config.StlTokenWS}`, {
        transports: ["websocket"],
    });

    return streamlabs
}