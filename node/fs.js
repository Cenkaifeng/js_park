// var fs = require('fs');
// var EventEmitter = require('events').EventEmitter,
//     a = new EventEmitter;

//     a.on('event', function(){
//         console.log('event called')
//     })
//     a.once('eve_once', function(){
//         console.log('one!')
//     })
//     a.emit('event')
//     a.emit('eve_once')
//     a.emit('eve_once')
//     a.emit('event')
// fs.readFile('/node/test', function (err, contents){
//     console.log(err)
//     if(!err){
//         console.log(contents)
//     }
// })

var mybuffer = Buffer.from('==ii1j2i3h1i23h', 'base64');


require('fs').writeFile('logo.png', mybuffer);