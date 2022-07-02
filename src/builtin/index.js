let Builtin = () => {
	return 0;
};
Builtin.stdout = require("./stdout")

module.exports = Builtin