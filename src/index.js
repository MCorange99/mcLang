let system = () => {
    return 0;
}

system.Builtin = require("./builtin");
// system.Parser = require("./parser");
system.File = require("./file")
// system.runner = require("./runner");

module.exports = system;

