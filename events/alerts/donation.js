const vbt = require("../../functions/Active")
const config = require("../../config.json")

module.exports = {
    for: "streamlabs",
    execute: async (eventData, intiface, vtubeStudio) => {
        const money = parseFloat(eventData.message[0].amount)
        console.log("[Logs] Donate from "+ eventData.message[0].from +" amount: " + money)

        switch (true) {
            case (money < config.vbtPriceSetting.mid[0]): {
                vbt(intiface, vtubeStudio, config.vbtPriceSetting.low[1], config.vtsSetting.expressions.low);
            }
            break;
            case (money >= config.vbtPriceSetting.mid[0] && money < config.vbtPriceSetting.height[0]): {
                vbt(intiface, vtubeStudio, config.vbtPriceSetting.mid[1], config.vtsSetting.expressions.mid);
            }
            break;
            case (money >= config.vbtPriceSetting.height[0]): {
                vbt(intiface, vtubeStudio, config.vbtPriceSetting.height[1], config.vtsSetting.expressions.height);
            }
            break;
        }
    }
}