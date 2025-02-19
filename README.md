# VTS-lxvense

Lovense remote manager

ดาวน์โหลดที่นี่ [Download](https://github.com/AsamiKafune/VTS-lxvense/releases)

## ❗ READ THIS! (1/2)

```
สำหรับ Script นี้เป็น Open Source สามารถนำไปดัดแปลงแก้ไขได้ตามความต้องการและ
ไม่นำไปแอบอ้างหรือขายต่อโดยไม่ได้รับอนุญาตเพราะมันคือ Opensource
หากต้องการนำไปใช้หรือแก้ไขและแจกจ่ายกรุณาแจกจ่ายแบบ Open Source ไม่อนุญาตให้ทำการปิดบังไฟล์ๆ
และไม่อนุญาตให้ลบเครดิตของผู้สร้าง (AsamiKafune) ออกเด็ดขาด
```

## ❗ READ THIS! (2/2)

```
โปรเจ็คนี้ทำมาเพื่อศึกษาเกี่ยวกับ WS/SOCKET.IO และการควบคุม VtubeStudio, OSC ผ่าน WS/SOCKET.IO
ไม่ได้มีเจตนาร้ายไดๆทั้งสิ้นและหวังว่าทุกๆคนจะเข้าใจและชอบมันนะครับ >w<
```

## ⚠ Warining

```
ก่อนรัน กรุณาตั้งค่า Config ให้เรียบร้อยก่อนโดยเฉพาะ TokenWS ของ Streamlab เพราะใช้ในการเรียกข้อมูลโดเนทและ Alert
หากพบ Error code: 'ECONNREFUSED' กรุณาตรวจสอบว่า VtubeStudio ได้เปิดให้ใช้งาน Plugin หรือไม่
Port ในการใช้งานสคริปนี้ : 8001, 9000, 9001 กรุณาเช็คว่าพร้อมใช้งานหรือไม่

และที่สำคัญพยายามอย่าใช้ต่อหน้า Youtube คุงบ่อยนะเดี๋ยวบินคาฟุไม่รู้ด้วยนะ
```

## ⚙ Reqirements

-   NodeJS v16+ [Download](https://nodejs.org/)
-   S*xtoy (สำหรับเวอร์ชั่น FUWA สามารถใช้ได้แค่ Lovense)
-   Streamlabs WS token หากไม่เจอ [กดปุ่มนี้](https://streamlabs.com/dashboard#/settings/api-settings)

## 💻 How to install
1. Download จาก [Release](https://github.com/AsamiKafune/VTS-lxvense/releases)
2. ทำการเปิด VTube Studio แล้วจากนั้นเปิด VTubeStudio Plugin โดยใช้ Port `8001` หรือตาม Config ที่ต้องการ
3. แก้ไข Config และเปิดตัว Plugin
3.1 สำหรับการเชื่อมต่อของเล่นจำเป็นต้องโหลด Lovense Connect บนมือถือแล้วกดไปยังปุ่ม Scan QR -> IP Addresss (สำคัญมากต้องอยู่ในวงแลนเดียวกัน)
4. หากทำตามครบทุกขั้นตอนแล้ว ก็สามารถเปิดใช้งานโปรแกรมนี้ได้เลย โดยเปิดไฟล์ `start.cmd` (หากโหลดจาก Release)

## 📄 โครงสร้าง Config.json
```json
{
    "README": "In donate section. expresstions for VTubeStudio and vrchatParametor for VRChat.",
    "README2": "if you don't need to use for VRChat or VTubeStudio you can ignore it but don't remove this.",
    "donate": [
        {
            "amount": 1000,
            "lovense": {
                "command": "Function",
                "action": "Vibrate:10,Rotate:3",
                "timeSec": 20
            },
            "expresstions": "EyesLove.exp3.json",
            "vrchatParametor": {
                "parameter": "/avatar/parameters/this_fx_parametor",
                "ActiveValue": 1,
                "DeActiveValue": 0
            }
        },
        {
            "amount": 50,
            "lovense": {
                "command": "Function",
                "action": "Vibrate:3,Rotate:3",
                "timeSec": 20
            },
            "expresstions": "EyesLove.exp3.json",
            "vrchatParametor": {
                "parameter": "/avatar/parameters/this_fx_parametor",
                "ActiveValue": 2,
                "DeActiveValue": 0
            }
        }
    ],
    "vrchat_haptic": {
        "/avatar/parameters/touch_boolean1": "toyid_1",
        "/avatar/parameters/touch_boolean2": "toyid_2"
    },
    "server": {
        "overlay": {
            "README": "If you modify the \"PORT\" value, please make the same change in /manager/public/overlay.html",
            "README2": "OBS browser URL: http://localhost:8002",
            "port": 8002,
            "host": "0.0.0.0"
        },
        "streamlabs": {
            "enable": true,
            "token": "streamlabs api socket token"
        },
        "lovense_connect": {
            "randomAction": false,
            "minimumDonate": 10,
            "connecturl": "http://192.168.1.103:20010"
        },
        "vtubestudio": {
            "enable": true,
            "host": "127.0.0.1",
            "port": 8001
        },
        "vrchat": {
            "README": "You can't use streamlab and hapticmode in sametime!",
            "enable": false,
            "haptic": false,
            "hapticAction": "Vibrate:3",
            "host": "127.0.0.1",
            "port": {
                "sender": 9000,
                "listen": 9001
            }
        }
    }
}
```

## ⚠ คำเตือน
-   **ชื่อ File Expression จะต้องตรงกับในโมเดลของ VTube Studio ไม่เช่นนั้นโมเดลจะไม่สารถเล่นได้**
-   **ในส่วนตรงตั้งค่า Donate หากไม่ใช้ VtubeStudio หรือ VRChat ให้ปล่อย Config นั้นไว้ห้ามลบออกแต่อย่าลืมปิดในส่วนของ Server**
-   **(สำหรับ VRCHAT) ไม่สามารถใช้โหมดการสัมผัสตัว (haptic) และโดเนทในเวลาเดียวกันได้ต้องเลือกอย่างได้อย่างหนึ่ง**
-   **(สำหรับ DEV) เนื่องจาก Module Node-OSC ไม่สามารถทำ Excute file ได้ต้องทำการแก้ไขในตัว Node_modules ก่อน build PKG**

## 🔮 Credits
-   [AsamiKafune](https://github.com/AsamiKafune/)

## LICENSE

-   [GNU General Public License v3.0](./LICENSE)
