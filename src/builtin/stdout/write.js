
module.exports = function(str/**...args*/){
	// let str = args.shift();
	
	// for (const a in args){
	// 	str = str.replace(/`?{}`?/, args[a]);
	// }
	process.stdout.write(str);
}
