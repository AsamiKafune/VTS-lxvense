# VTS-lxvense
English | [ไทย](./docs/README_TH.md)

VtubeStudio - Plugin S*xtoy using TypeScript

If you are a regular user, download it here [Download](https://github.com/AsamiKafune/VTS-lxvense/releases/download/1.0.1/vtx-lxvense.zip)

## ❗ READ THIS! (1/2)

```
For this Script is Open Source and can be modified as needed.
But it's great if it's not used to impersonate or resell without permission because it's open source.
If you want to use or modify and distribute, please distribute open source only!
and delete the creator's credit is not allowed. (AsamiKafune) is strictly out.
```

## ❗ READ THIS! (2/2)

```
This project is made to learn about WS and control VtubeStudio, Intiface via WS.
```

## ⚠ Warning

```
Before running, please run the program (VtubeStudio, Intiface) above and complete the settings before starting the program "vtx-lxvense.exe".
**IMPORTANT** (Please set the config first, especially Streamlab's TokenWS because it is used to retrieve Donate and Alert information)
If you encounter Error code: 'ECONNREFUSED', please check if VtubeStudio has enabled Plugin and please check Intiface if WS is enabled or not.
Port to use this script : 8001, 12345 Please check if it is available or not.
```

## ⚙ Reqirements

-   NodeJS v16+ [Download](https://nodejs.org/)
-   Intiface [Download](https://intiface.com/desktop/)
-   S*xtoy (Lovense / and general)
-   Streamlabs WS token [Link](https://streamlabs.com/dashboard#/settings/api-settings)

## 💻 How to install
1. Download [Release](https://github.com/AsamiKafune/VTS-lxvense/releases)
2. Start VTube Studio Then open VTubeStudio Plugin using Port `8001` or as required by config.
3. Start Intiface Then press `"Start server"` once.
4. and connect the toy successfully.
5. Then press `"Disconnect from server"` on the `"Devices"` menu (Intiface).
6. If all steps have been followed You can run this program directly by opening the file `run.cmd` (if downloaded from Release).

## ⚠ Warning
-   **The file expression name in the config must match the file name. expression.exp3.json that you have in your live2D model**

## 📄 Config.json
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
            "token": "Streamlabs WS TOKEN"
        },
        "intiface": {
            "host": "127.0.0.1",
            "port": 12345
        }
    }
}
```

## ✨ FOR DEVELOPER

```bash
// Download script & Install library
$ git clone https://github.com/AsamiKafune/VTS-lxvense
$ yarn install

// Development mode (**It is not recommended for actual use because it consumes a lot of RAM.**)
$ yarn dev

// Production mode (**recommended**)
$ yarn build
$ yarn start

// build to .exe 
$ yarn build
$ yarn build:win
```

## 🔮 Special thank

-   [nicenathapong](https://github.com/nicenathapong/)
-   [mrwan200](https://github.com/mrwan200/)
-   [MikihinaSann](https://github.com/MikihinaSann/)
-   [AsamiKafune](https://github.com/AsamiKafune/) <- ME >w<

## LICENSE

-   [GNU General Public License v3.0](./LICENSE)
