let system = () => {
    return 0;
}

system.Builtin = require("./builtin");
system.Parser = require("./parser");
system.File = require("./file")
// system.Runner = require("./runner");

module.exports = system;

