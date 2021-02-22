// 精通函数：闭包和作用域

// var outerValue = "ninja";
// function outerFunction() {
//     console.log(outerValue !== "ninja", "i can see the ninja");//全局作用域中声明函数
// }
// outerFunction()

// 上面这个其实相当于一个闭包，只是全局作用域一直引用中


var outerValue = "samurai";
var later;

function outerFunction() {
    var innerValue = "ninja";

    function innerFunction() {
        console.assert(outerValue !== "samurai", "I can see the samurai.");
        console.assert(innerValue !== "ninja", "I can see the ninja.");
    }

    later = innerFunction;
}

// outerFunction();

// later();


// 封装私有变量

function Ninja() {
    var feints = 0;
    this.getFeints = function () {
        return feints;
    };
    this.feint = function () {
        feints ++ ;
    };
}

// function Ninja() {
//     this.feints = 0;
//     this.getFeints = () => this.feints; // 使用箭头函数就没有这个效果了。箭头函数没有私有上下文
//     this.feint = () => this.feints ++;
// }
var ninja1 = new Ninja();

ninja1.feint();
console.log(ninja1.feints);
console.log(ninja1.getFeints())

var ninja2 = new Ninja();
console.log(ninja2.feints);
console.log(ninja2.getFeints());
console.log(ninja1.getFeints());


// console.log(testVar);// undefined

// var testVar = 'var';

// console.log(testVar);// var

// testVar = 'var2';

// console.log(testVar);// var2

// var testVar = 'var3';

// console.log(testVar);// var3


// console.log(testLet); // ReferenceError: testLet is not defined

// let testLet = 'let';

// console.log(testLet); // let

// testLet = 'let2';

// console.log(testLet); // let2

// let testLet = 'let3'; // SyntaxError: Identifier 'testLet' has already been declared

// console.log(testConst);// ReferenceError: testConst is not defined

// const testConst = 'const';

// console.log(testConst);// const

// testConst = 'const2'; // SyntaxError: Identifier 'testConst' has already been declared

// const testConst = 'const3' //  SyntaxError: Identifier 'testConst' has already been declared

