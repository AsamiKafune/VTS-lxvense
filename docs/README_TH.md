# VTS-lxvense
[English](../README.md) | ไทย

VtubeStudio - Plugin S*xtoy using TypeScript

ดาวน์โหลดที่นี่ [Download](https://github.com/AsamiKafune/VTS-lxvense/releases/download/1.0.1/vtx-lxvense.zip)

## ❗ READ THIS! (1/2)

```
สำหรับ Script นี้เป็น Open Source สามารถนำไปดัดแปลงแก้ไขได้ตามความต้องการ
แต่จะดีมากหากไม่นำไปแอบอ้างหรือขายต่อโดยไม่ได้รับอนุญาตเพราะมันคือ Opensource
หากต้องการนำไปใช้หรือแก้ไขและแจกจ่ายกรุณาแจกจ่ายแบบ Open Source ไม่อนุญาตให้ทำการปิดบังไฟล์ๆ
และไม่อนุญาตให้ลบเครดิตของผู้สร้าง (AsamiKafune) ออกเด็ดขาด
```

## ❗ READ THIS! (2/2)

```
โปรเจ็คนี้ทำมาเพื่อศึกษาเกี่ยวกับ WS และการควบคุม VtubeStudio, Intiface ผ่าน WS
ไม่ได้มีเจตนาร้ายไดๆทั้งสิ้นและหวังว่าทุกๆคนจะเข้าใจและชอบมันนะครับ >w<
```

## ⚠ Warining

```
ก่อนรัน กรุณารันโปรแกรมข้างต้นให้หมดและตั้งค่าให้เรียบร้อยก่อนเปิดโปรแกรม
VtubeStudio, Intiface , สำคัญ (กรุณาตั้งค่า Config ให้เรียบร้อยก่อนโดยเฉพาะ TokenWS ของ Streamlab เพราะใช้ในการเรียกข้อมูลโดเนทและ Alert)
หากพบ Error code: 'ECONNREFUSED' กรุณาตรวจสอบว่า VtubeStudio ได้เปิดให้ใช้งาน Plugin หรือไม่และกรุณาตรวจสอบ Intiface ว่าได้เปิดใช้งาน WS หรือยัง
Port ในการใช้งานสคริปนี้ : 8001, 12345 กรุณาเช็คว่าพร้อมใช้งานหรือไม่

และที่สำคัญพยายามอย่าใช้ต่อหน้า Youtube คุงบ่อยนะเดี๋ยวบินคาฟุไม่รู้ด้วยนะ
```

## ⚙ Reqirements

-   NodeJS v16+ [Download](https://nodejs.org/)
-   Intiface [Download](https://intiface.com/desktop/)
-   S*xtoy (ทั้ง Lovense / และของทั่วไป)
-   Streamlabs WS token หากไม่เจอ [กดปุ่มนี้](https://streamlabs.com/dashboard#/settings/api-settings)

## 💻 How to install
1. Download จาก [Release](https://github.com/AsamiKafune/VTS-lxvense/releases)
2. ทำการเปิด VTube Studio แล้วจากนั้นเปิด VTubeStudio Plugin โดยใช้ Port `8001` หรือตาม Config ที่ต้องการ
3. ทำการเปิด Intiface แล้วทำการกด `"Start server"` ไปหนึ่งครั้ง
4. แล้วเชื่อมต่อของเล่นให้เรียบร้อย
5. จากนั้นกด `"Disconnect from server"` ที่เมนู `"Devices"` (intiface)
6. หากทำตามครบทุกขั้นตอนแล้ว ก็สามารถเปิดใช้งานโปรแกรมนี้ได้เลย โดยเปิดไฟล์ `run.cmd` (หากโหลดจาก Release)

## 📄 โครงสร้าง Config.json
```json
{
    "queue": {
        "delay": 3000
    },
    "donate": {
        "low": {
            "ammout": 10,
            "expresstions": "low.exp3.json",
            "power": 0.2
        },
        "mid": {
            "ammout": 50,
            "expresstions": "mid.exp3.json",
            "power": 0.5
        },
        "height": {
            "ammout": 100,
            "expresstions": "height.exp3.json",
            "power": 1.0
        }
    },
    "server": {
        "vtuberstudio": {
            "host": "127.0.0.1",
            "port": 8001
        },
        "streamlabs": {
            "token": "นำ TOKEN ของ Streamlabs มาใส่ตรงนี้"
        },
        "intiface": {
            "host": "127.0.0.1",
            "port": 12345
        }
    }
}
```

## ✨ สำหรับนักพัฒนา

```bash
// Download script & Install library
$ git clone https://github.com/AsamiKafune/VTS-lxvense
$ yarn install

// Development mode (**ไม่แนะนำให้ใช้งานจริง เพราะจะกิน RAM สูง**)
$ yarn dev

// Production mode (**ควรใช้งานอันนี้**)
$ yarn build
$ yarn start

// หากต้องการ build เป็น .exe 
$ yarn build:win
```

## ⚠ คำเตือน
-   **ชื่อ File Expression จะต้องตรงกับในโมเดลของ VTube Studio ไม่เช่นนั้นโมเดลจะไม่สารถเล่นได้**

## 🔮 ผู้ร่วมโปรเจค ขอบคุณมากๆค้าบบ

-   [nicenathapong](https://github.com/nicenathapong/)
-   [mrwan200](https://github.com/mrwan200/)
-   [MikihinaSann](https://github.com/MikihinaSann/)
-   [AsamiKafune](https://github.com/AsamiKafune/) <- ผมเอง >w<

## LICENSE

-   [GNU General Public License v3.0](./LICENSE)
