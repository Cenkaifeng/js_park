var colors = require('colors');

console.log('smashing!!!'.rainbow)

console.log(colors.green('hello')); // outputs green text
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text
console.log(colors.inverse('inverse the color')); // inverses the color
console.log(colors.rainbow('OMG Rainbows!')); // rainbow
console.log(colors.trap('Run the trap')); // Drops the bass

function a () {
    console.log(this.a)
    return this.a == 'b';
   
}
 
a.call({a: 'b'});

// console.log(a())