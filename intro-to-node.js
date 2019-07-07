
// exercice 1
console.log("HELLO WORLD")

// exercice 2
let sum = 0
for (let i=2; i<process.argv.length; i++){
    sum+=+process.argv[i]
}
console.log(sum)

// exercice 3
let fs = require('fs')
let str = fs.readFileSync(process.argv[2])
let array = str.toString().split('\n')
console.log(array.length-1) 

//exercice 4
let fs = require('fs')
fs.readFile(process.argv[2],'utf-8',(err,data) => {
    if(err) throw err;
    let lines = data.split('\n').length-1
    console.log(lines)
})

// exercice 5 methode 1
let fs = require('fs')
const filtreTexte = (arr, requete) => { 
    return arr.filter(el =>  el.toLowerCase().indexOf('.'+requete.toLowerCase()) !== -1);
  }
fs.readdir(process.argv[2],(err,files) => {
    if(err) console.log(err)
    let array = filtreTexte(files,process.argv[3])
    array.forEach(element => {
        console.log(element)
    });

})

// exercice 5 methode 2
var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2], (err, files) => {
    if (err) return console.error(err)
    files.forEach(file => {
        if (path.extname(file).toLowerCase() ===  '.' + process.argv[3]) {
            console.log(file)
        }
    })
})

// exercice 6
const filtredModule = require('./filtred-module')
filtredModule(process.argv[2], process.argv[3],(err,files) => {
    if(err) console.log(err)
    files.forEach(element => {
        console.log(element)
    });
})