const fs = require("fs")

module.exports = (fp) => {
    fs.unlinkSync(fp)
    return 0;
}