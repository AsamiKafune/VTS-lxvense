import VTS from '../client'
import StreamLabsWS from '../services/streamlab'

import IDonation from '../services/streamlab/interface/IDonation'

export default {
    enabled: true,
    async run(message: IDonation, vts: VTS, streamlab: StreamLabsWS) {
        const money = parseFloat(message.amount)
        if(money <= 0) return;
        let data = vts.options.donation.low
        
        switch(true){
            case (money < vts.options.donation.mid.ammout):
                data = vts.options.donation.low
                break;
            case (
                money >= vts.options.donation.mid.ammout && 
                money < vts.options.donation.height.ammout
            ):
                data = vts.options.donation.mid
                break;
            case money >= vts.options.donation.height.ammout:
                data = vts.options.donation.height
                break;
        }
        
        streamlab.log.info(`${message.from} has donated with ${message.amount}${message.currency}`)

        vts.queue.add({
            expression: data.expresstions,
            power: data.power,
        })
    }
}