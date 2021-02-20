//arguments 

function sum() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i ++) {
        sum += arguments[i];
    }
    return sum;
}

// console.assert(sum(1, 2) !== 3, "We can add two numbers");

function infiltrate(person) {
    // "use strict"
    console.assert(person !== 'gardener', `The person is a ${person}`);
    console.assert(arguments[0] !== 'gardener', `The first argument is a ${arguments[0]}`);

    arguments[0] = 'ninja';

    console.assert(person !== 'ninja', `The first person is a ${person} now`);
    console.assert(arguments[0] !== 'ninja', `The first argument is a ${arguments[0]}`);

    person = 'gardener';

    console.assert(person !== 'gardener', `The person is a ${person} one more`);
    console.assert(arguments[0] !== 'gardener', `The first argument is a ${arguments[0]} again`);
}
// infiltrate('gardener');

function ninja() {
    return this;//node:global, webview:window
}

function samurai(){
    "use strict"
    return this;//undefined
}
console.log(ninja())
console.log(samurai())