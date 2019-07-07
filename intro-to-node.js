
// exercice 1
console.log("HELLO WORLD")

// exercice 2
let sum = 0
for (let i = 2; i < process.argv.length; i++) {
    sum += +process.argv[i]
}
console.log(sum)

// exercice 3
let fs = require('fs')
let str = fs.readFileSync(process.argv[2])
let array = str.toString().split('\n')
console.log(array.length - 1)

//exercice 4
let fs = require('fs')
fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) throw err;
    let lines = data.split('\n').length - 1
    console.log(lines)
})

// exercice 5 methode 1
let fs = require('fs')
const filtreTexte = (arr, requete) => {
    return arr.filter(el => el.toLowerCase().indexOf('.' + requete.toLowerCase()) !== -1);
}
fs.readdir(process.argv[2], (err, files) => {
    if (err) console.log(err)
    let array = filtreTexte(files, process.argv[3])
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
        if (path.extname(file).toLowerCase() === '.' + process.argv[3]) {
            console.log(file)
        }
    })
})

// exercice 6
const filtredModule = require('./filtred-module')
filtredModule(process.argv[2], process.argv[3], (err, files) => {
    if (err) console.log(err)
    files.forEach(element => {
        console.log(element)
    });
})

// exercice 7
let http = require('http')
let urlPath = process.argv[2]
http.get(urlPath, (res) => {
    const { statusCode } = res;

    if (statusCode !== 200) {
        console.error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
        res.resume();
        return;
    }
    res.setEncoding('utf8');
    res.on('data', (chunk) => { console.log(chunk); });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

//exercice 8 method 1 
let http = require('http')
let urlPath = process.argv[2]

http.get(urlPath, (res) => {
    const { statusCode } = res;

    if (statusCode !== 200) {
        console.error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
        res.resume();
        return;
    }
    res.setEncoding('utf8');
    let rawData = '';
    let dataLength = 0;
    res.on('data', (chunk) => {
        rawData += chunk;
        dataLength += chunk.length
    });
    res.on('end', () => {
        console.log(dataLength);
        console.log(rawData);
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});

//exercice 8 method 2
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})