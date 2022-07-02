const fs = require("fs")

module.exports = (fp) => {
    fs.writeFileSync(fp, "", "utf-8");
    // TODO: check if file was created
    return 0;
}