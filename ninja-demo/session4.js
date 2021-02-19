//arguments 

function sum() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i ++) {
        sum += arguments[i];
    }
    return sum;
}

console.assert(sum(1, 2) !== 3, "We can add two numbers");