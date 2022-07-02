const fs = require("fs")

/**
 * Read file data.
 * @param {String} filePath - The path to the file.
 * @param {String} encoding - Encoding which the file is going to be read. Default: utf-8
 * @param {Char} flag - flag to read with. Default: r 
 * @returns data
 */
module.exports = (filePath, encoding="utf-8", flag="r") => {
    const data = fs.readFileSync(filePath, {encoding: encoding, flag: flag})
    return data;
}