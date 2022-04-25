module.exports = (streamlabs, intiface , vtubeStudio, events) => {

    streamlabs.on("event", (eventData) => {
        if(events.get(eventData?.type) && (events.get(eventData.type)?.for === "streamlabs")||events.get(eventData.type)?.for === "youtube_account"){
            try {
                events.get(eventData.type).execute(eventData, intiface, vtubeStudio)
            } catch (error) {
                console.log(error)
            }
        }
        else return
    });

}