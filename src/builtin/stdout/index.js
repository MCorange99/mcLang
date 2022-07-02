let stdout = () => {
	return 0;
};

stdout.write = require("./write")
stdout.clear = require("./clear")

module.exports = stdout
