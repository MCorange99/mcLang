const Builtin = require("..")
const Write = require("./write")
const Clear = require("./clear")

exports.stdout = class stdout extends Builtin {
	constructor(){
		super();
		this.write = Write
		this.clear = Clear
	}

	write = this.write 

	static test(){
		console.log("test ok")
	}
}