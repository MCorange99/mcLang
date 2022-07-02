const fs = require("fs")

module.exports = (fp, data, encoding="utf-8") => {
    fs.writeFileSync(fp, data, encoding)
    return 0;
}