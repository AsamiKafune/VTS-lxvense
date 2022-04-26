import {
	ColorText,
	ColorType
} from './color';

class Logger {
	private readonly _name: string

	/**
	 * Logger 
	 * Create by: @author M-307
	 */
	
	constructor(name: string){
		this._name = name;
	}
		
	debug(...message: string[]){
		console.debug(this.getFormat("DEBUG"), this.createMessage(ColorText.DEBUG, message))	
	}

	success(...message: string[]){
		console.log(this.getFormat("SUCCESS"), this.createMessage(ColorText.SUCCESS, message))	
	}

	info(...message: string[]){
		console.info(this.getFormat("INFO"), this.createMessage(ColorText.INFO, message))	
	}

	warn(...message: string[]){
		console.warn(this.getFormat("WARN"), this.createMessage(ColorText.WARN, message))
	}
	
	error(...message: string[]){
		console.error(this.getFormat("ERROR"), this.createMessage(ColorText.ERROR, message))	
	}

	private getFormat(log_type: ColorType = "DEBUG"){
		/*
		 * Format:
		 * [DATE] [PROCESS_ID] [PROCESS] [LOG_TYPE]
		 */

		return `${this.createBox(new Date().toLocaleString())} ${this.createBox(process.pid.toString())} ${this.createBox(this._name)} ${this.createBox(log_type, ColorText[log_type])}`
	}

	private createMessage(color: ColorText, message: string[]){
		return `${color}${message.join(" ")}${ColorText.RESET}`
	}

	private createBox(value: string, color: string = "\x1b[32m"){
		/*
		 * Format:
		 * [VALUE]
		 */

		return `\x1b[1;30m[${color}${value}\x1b[1;30m]\x1b[0m`
	}
}

export default Logger;
