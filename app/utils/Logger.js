/***
/* This class is static. To use it just import it and use it as Logger.log().
/* Doesn't need to be instantiated
/*
/**/

export default class Logger {
	constructor(logger_mode) {
		this.mode = Logger.checkDateMatching(logger_mode);
	}

	log (args) {
		if (this.mode) Logger._auxLogger(arguments, 'log')
	}
	info (args) {
		if (this.mode) Logger._auxLogger(arguments, 'info');
	}
	warn (args) {
		if (this.mode) Logger._auxLogger(arguments, 'warn');
	}
	error (args) {
		if (this.mode) Logger._auxLogger(arguments, 'error');
	}

	static _auxLogger(args, fn) {
		for (let i = 0; i < args.length; i++) {
			console[fn](args[i]);
		}
	}

	static checkDateMatching (settings) {
		var newstr = settings.substr(5,2)+"/"+settings.substr(8,2)+"/"+settings.substr(0,4);
		var date = new Date(newstr);

		//check if its a valid date, if not set one in the past. Invalid dates return NaN to getTime
		date = this.isNaN(date.getTime()) ? new Date(0) : date;

		return date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
	}

	static isNaN(o){
		if (typeof(Number) === 'function' && typeof(Number.isNaN) === 'function'){
			return Number.isNaN(o);
		}
		else{
			return typeof(o) === 'number' && isNaN(o);
		}
	}
}