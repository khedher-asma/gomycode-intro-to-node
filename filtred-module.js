let fs = require('fs')
let path = require('path')
module.exports = function(dirName, fileExt, callback){
    fs.readdir(dirName,(err,files) => {
        if(err) return callback(err)
        let array = []
        files.forEach(file => {
            if(path.extname(file).toLowerCase() === '.'+fileExt.toLowerCase())
            array.push(file)
        })
        callback(null,array)
    })
}