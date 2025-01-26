const { printTable } = require("console-table-printer");
const fetch = require("cross-fetch")
const path = require("node:path")
const fs = require("fs")

async function getToy() {
    const raw = await fetch(getGlobalConfig().server.lovense_connect.connecturl + "/command", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify({
            "command": "GetToys"
        })
    })
    let data = await raw.json()
    if (data.code == 200) {
        try {
            let toyData = JSON.parse(data.data.toys)
            const formattedData = Object.values(toyData).map(device => ({
                Name: device.name,
                ID: device.id,
                Version: device.version,
                Status: device.status,
                Battery: device.battery,
                Nickname: device.nickName || "N/A"
            }));

            printTable(formattedData);
        } catch (error) {
            console.log("[ERROR] ",error)
        }
    } else {
        console.log("[ERROR] i can't find your toy data...")
    }
}

getToy()


function getGlobalConfig() {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "/manager/config.json")))
}