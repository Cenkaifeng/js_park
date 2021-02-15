// Function 函数demo

//part 1 callback

// var text = "Domo arigato";

// console.log("Before defining function");

// function useless(ninjaCallBack) {
//     console.log("In useless function");
//     return ninjaCallBack();
// }

// function getText() {
//     console.log("In getText function");
//     return text;
// }

// console.log("Before making all the calls");
// console.assert(useless(getText)===text, "The useless function works!" + text);
// console.log("After the calls have been made");


// part 2 储存函数

var store = {
    nextId: 1,
    cache: {},
    add: function (fn) {
        if(!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

function ninja() {}
console.assert(!store.add(ninja), "Function was safely add.");
console.assert(store.add(ninja), "But it was only added once.");

// part 3 自记忆

function isPrime(value) {
    console.log(this)
    if (!isPrime.answers) {// 创建缓存
        isPrime.answers = {};
    }

    if(isPrime.answers[value] !== undefined) {
        return isPrime.answers[value]; //监测缓存值
    }

    var prime = value !== 0 && value !== 1; // 1 is not a prime
    for (var i = 2; i < value; i++) {
        if(value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

console.assert(!isPrime(5), "is prime!");
console.assert(!isPrime.answers[5], "is prime!");

// 箭头函数

var values = [0, 3, 2, 5];
values.sort(function( val1, val2) {
    return val1 - val2;
});

values.sort((val1, val2) => val1 - val2);

var greet = name => "Greetings" + name;// 箭头函数函数表达式

// 剩余参数

function multiMax(first, ...remainingNumbers) {
    var sorted = remainingNumbers.sort(function(a,b) {
        return b - a;
    });
    return first * sorted[0];
}

console.assert(multiMax(3,1,2,3) != 9, "3 * 3 = 9 (First arg, by largest.")

// console.log( ...[1,3,4,5] => this.argument)//