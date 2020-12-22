const fs = require('fs');

let rs = fs.createReadStream('1.txt')
let ws = fs.createWriteStream('2.txt')

console.log(process)
rs.pipe(ws)

rs.on('error', err => {
    console.log(err)
})