import VTS from "./client"; 
import fs from 'fs'

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const vts = new VTS(config)
vts.start()