const fs = require("fs")

let File = () => {

}

/**
 * Read file data.
 * @param {String} filePath - The path to the file.
 * @param {String} encoding - Encoding which the file is going to be read. Default: utf-8
 * @param {Char} flag - flag to read with. Default: r 
 * @returns data
 */
File.read = require("./read")

File.write = require("./write")
File.append = require("./append")
File.delete = require("./delete")
File.create = require("./create")

module.exports = File