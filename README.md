# VTS-lxvense
VtubeStudio - Plugin Xtoy using Javascript

**[ READ THIS! ]**
```
สำหรับ Script นี้เป็น OpenSource สามารถนำไปดัดแปลงแก้ไขได้ตามความต้องการ
แต่จะดีมากหากไม่นำไปแอบอ้างหรือขายต่อโดยไม่ได้รับอนุญาตเพราะมันคือ Opensource
หากต้องการนำไปใช้หรือแก้ไขและแจกจ่ายกรุณาแจกจ่ายแบบ Opensource ไม่อนุญาตให้ทำการปิดบังไฟล์ๆ
และไม่อนุญาตให้ลบเครดิตของผู้สร้าง (AsamiKafune) ออกเด็ดขาด
```


**[ READ THIS! #2 ]**
```
โปรเจ็คนี้ทำมาเพื่อศึกษาเกี่ยวกับ WS และการควบคุม VtubeStudio, Intiface ผ่าน WS
ไม่ได้มีเจตนาร้ายไดๆทั้งสิ้นและหวังว่าทุกๆคนจะเข้าใจและชอบมันนะครับ >w<
```

**[ Warining ]**
```
ก่อนรัน กรุณารันโปรแกรมข้างต้นให้หมดและตั้งค่าให้เรียบร้อยก่อนเปิดโปรแกรม
VtubeStudio, Intiface , สำคัญ (กรุณาตั้งค่า Config ให้เรียบร้อยก่อนโดยเฉพาะ TokenWS ของ Streamlab เพราะใช้ในการเรียกข้อมูลโดเนทและ Alert)
หากพบ Error code: 'ECONNREFUSED' กรุณาตรวจสอบว่า VtubeStudio ได้เปิดให้ใช้งาน Plugin หรือไม่และกรุณาตรวจสอบ Intiface ว่าได้เปิดใช้งาน WS หรือยัง
Port ในการใช้งานสคริปนี้ : 8001, 12345 กรุณาเช็คว่าพร้อมใช้งานหรือไม่

และที่สำคัญพยายามอย่าใช้ต่อหน้า Youtube คุงบ่อยนะเดี๋ยวบินคาฟุไม่รู้ด้วยนะ
```

**[ Require ]**
- NodeJS v16+ [Download](https://nodejs.org/)
- Intiface [Download](https://intiface.com/desktop/)
- XToy (ทั้ง Lovense / และของทั่วไป)
- Streamlabs WS token หากไม่เจอ [กดปุ่มนี้](https://streamlabs.com/dashboard#/settings/api-settings)


**[ How to install / Run ]**
```
วิธีการลง 
- โหลดไฟล์จากตัว Github นี้จากนั้น npm i หรือ yarn
- หลังจากลงเสร็จทำการ Config ต่างๆดังนี้
- เปิด VtubeStudio แล้วเปิดใช้งาน Plugin ที่ Port 8001 หรือ Port ที่ต้องการแต่ต้องตรงกันกับสคริปนี้
- ตัวโมเดลวีจะต้องตั้งค่า Expression หรือสีหน้าที่อยากได้ให้เสร็จก่อนที่ไฟล์ Config ของสคริปนี้โดยการน้ำชื่อไฟล์ไปใส่ใน expressions ได้เลย
- ตั้งค่า Intiface ให้เชื่อมกับของเล่นให้เรียบร้อยจากนั้นกด StartServer แล้วเชื่อมของเล่นผ่าน Intiface จากนั้นกด Stopserver หนึ่งครั้งก่อนกด StartServer แล้วค่อยรันสคริปนี้
```

** [ ผู้ร่วมโปรเจค ขอบคุณมากๆค้าบบ ] **
- คุณไนส์ [nicenathapong](https://github.com/nicenathapong/)
- คุณว่าน [mrwan200](https://github.com/mrwan200/)
- คุณมิว [MikihinaSann](https://github.com/MikihinaSann/)
- คาฟุ [AsamiKafune](https://github.com/AsamiKafune/)
 
