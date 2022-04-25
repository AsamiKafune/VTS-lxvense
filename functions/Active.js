var { readFileSync } = require('fs');
var { join } = require('path')
const config = require('../config.json')
const queues = [];
let id = 0;
let isFlushed = false;

module.exports = (intiface, vtubeStudio, power, expression) => {
  const db = JSON.parse(readFileSync(join(__dirname, '../db.json'), 'utf-8'));
  queues.push({ power, expression });
  flushQueue(vtubeStudio, intiface, db);
}
async function flushQueue(vtubeStudio, intiface, db) {
  if (isFlushed) return;
  isFlushed = true;

  // Start toys action & Vtube;
  for (const item of queues) {
    ActiveToys(intiface, db.toyCount, item.power);
    ActiveVtube(vtubeStudio, item.expression);
    queues.shift();
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  // Stopped alls;
  ActiveToys(intiface, db.toyCount, 0);
  for (const expression of Object.values(config.vtsSetting.expressions)) {
    ActiveVtube(vtubeStudio, expression, false);
  }
  isFlushed = false;
}

function ActiveVtube(vtubeStudio, expression, enable = true) {
  console.log(expression, enable);
  vtubeStudio.send(
    JSON.stringify({
      apiName: 'VTubeStudioPublicAPI',
      apiVersion: '1.0',
      requestID: '4',
      messageType: 'ExpressionActivationRequest',
      data: {
        expressionFile: expression,
        active: enable,
      },
    }),
  )
}

function ActiveToys(intiface, count, power) {
  for (let i = 0; i < count; i++) {
    console.log('send', power);
    intiface.send(
      JSON.stringify(
        [
          {
            VibrateCmd: {
              Id: 3,
              DeviceIndex: i,
              Speeds: [
                { Index: i, Speed: power }
              ],
            },
          },
        ]
      )
    )
  };
}