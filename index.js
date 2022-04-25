/**
 * 
 * [ READ THIS! ]
 * 
 * สำหรับ Script นี้เป็น OpenSource สามารถนำไปดัดแปลงแก้ไขได้ตามความต้องการ
 * แต่จะดีมากหากไม่นำไปแอบอ้างหรือขายต่อโดยไม่ได้รับอนุญาตเพราะมันคือ Opensource
 * หากต้องการนำไปใช้หรือแก้ไขและแจกจ่ายกรุณาแจกจ่ายแบบ Opensource ไม่อนุญาตให้ทำการปิดบังไฟล์ๆ
 * และไม่อนุญาตให้ลบเครดิตของผู้สร้าง (AsamiKafune) ออกเด็ดขาด
 * 
 * [ READ THIS! #2 ]
 * โปรเจ็คนี้ทำมาเพื่อศึกษาเกี่ยวกับ WS และการควบคุม VtubeStudio, Intiface ผ่าน WS
 * ไม่ได้มีเจตนาร้ายไดๆทั้งสิ้นและหวังว่าทุกๆคนจะเข้าใจและชอบมันนะครับ >w<
 * 
 * [### Warining ###]
 * ก่อนรัน กรุณารันโปรแกรมข้างต้นให้หมดและตั้งค่าให้เรียบร้อยก่อนเปิดโปรแกรม
 * - VtubeStudio, Intiface , สำคัญ (กรุณาตั้งค่า Config ให้เรียบร้อยก่อนโดยเฉพาะ TokenWS ของ Streamlab เพราะใช้ในการเรียกข้อมูลโดเนทและ Alert)
 * - หากพบ Error code: 'ECONNREFUSED' กรุณาตรวจสอบว่า VtubeStudio ได้เปิดให้ใช้งาน Plugin หรือไม่และกรุณาตรวจสอบ Intiface ว่าได้เปิดใช้งาน WS หรือยัง
 * - Port ในการใช้งานสคริปนี้ : 8001, 12345 กรุณาเช็คว่าพร้อมใช้งานหรือไม่
 * 
 * [ VtubeStudio ]
 * จะต้องตั้งค่า Expression หรือสีหน้าที่อยากได้ให้เสร็จก่อนที่ไฟล์ Config
 * 
 * [ Intiface ]
 * ตั้งค่าให้เชื่อมกับของเล่นให้เรียบร้อยจากนั้นกด Stopserver หนึ่งครั้งก่อนกด StartServer แล้วค่อยรันสคริปนี้
 * 
 * Author: KafuneCH.
 * หากไม่เข้าใจกรุณาย้อนอ่าน ReadME อีกครั้ง
 * 
 */

const io = require("socket.io-client");
const WebSocket = require("ws")
const config = require("./config.json")

const intiface = require("./services/intiface")(WebSocket, config);
const vtubeStudio = require("./services/vtubestudio")(WebSocket, config);
const streamlabs = require("./services/streamlabs")(io, config);

const fs = require("fs");
fs.writeFileSync("./db.json", JSON.stringify({"toyCount": 0}), "utf8");
require("./handlers/loadEvent")(streamlabs, intiface, vtubeStudio);