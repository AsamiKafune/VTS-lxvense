import VTS from "./client"; 
import config from './config.json'

const vts = new VTS(config)
vts.start()