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
สำหรับการเชื่อมกับ VRCHAT จะมีอัพเดทในเร็วๆนี้ยังไม่สามารถใช้ได้ในตอนนี้
```json
{
    "donate": [
        {
            "amount": 1000,
            "lovense": {
                "command": "Function",
                "action": "Vibrate:10,Rotate:3",
                "timeSec": 20
            },
            "expresstions": "EyesLove.exp3.json"
        },
        {
            "amount": 20,
            "lovense": {
                "command": "Function",
                "action": "Vibrate:3,Rotate:3",
                "timeSec": 20
            },
            "expresstions": "EyesLove.exp3.json"
        }
    ],
    "vrchat": [
        {
            "avatar_vrc_paramitor_1": "nametoy_1",
            "avatar_vrc_paramitor_2": "nametoy_2"
        }
    ],
    "server": {
        "streamlabs": {
            "enable": true,
            "token": ""
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
            "enable": false,
            "host": "127.0.0.1",
            "port": {
                "out": 9000,
                "in": 9001
            }
        }
    }
}
```

## ⚠ คำเตือน
-   **ชื่อ File Expression จะต้องตรงกับในโมเดลของ VTube Studio ไม่เช่นนั้นโมเดลจะไม่สารถเล่นได้**

## 🔮 Credits
-   [AsamiKafune](https://github.com/AsamiKafune/)

## LICENSE

-   [GNU General Public License v3.0](./LICENSE)
