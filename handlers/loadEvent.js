const fs = require("fs")
const list = new Map();

module.exports = (streamlabs, intiface, vtubeStudio) => {

    const alert = fs.readdirSync("./events/alerts")
    alert.forEach(el => {
        console.log("[Logs] alert file: "+ el + " has Loadded!")
        const x = require("../events/alerts/"+ el)
        list.set(el.replace(".js",""), x)
    })

    const loadEvent = fs.readdirSync("./events/functions") 
    loadEvent.forEach(el => {
        console.log("[Logs] Event file: "+ el + " has Loadded!")
        if(el === "event.js") require("../events/functions/"+el)(streamlabs,intiface, vtubeStudio ,list)
        else require("../events/functions/"+el)(streamlabs, intiface ,vtubeStudio)
    })

}