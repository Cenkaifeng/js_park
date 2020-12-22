console.log('test');
// 乘法表demo

// let table = ''
// for(let i = 1 ; i <= 9 ; i++ ) {
//     for( let j = 1; j <= i; j ++){
//         let ret= i*j
//         if (ret < 10) {
//             ret = ' ' + ret
//         }
//         table +=`${i} x ${j} = ${ret} `
//     }
//     table = table + '\n'
// }
// console.log(table)
'use strict'

function ta (na1, na2) {


    arguments[1] = 'xxxx'
    console.log(arguments[1], na1, na2)
}
ta('sdfs','222')


// 简单闭包

function foo() {
    let localVal = 'privatte var';
    return () => localVal;
}

let getLocalVal = foo();
console.log(getLocalVal());

// let sayHi;
// if (condition) {
//     sayHi = function () {
//         console.log("Hi!")
//     }
// } else {
//     sayHi = function () {
//         console.log("Yo!")
//     }
// }
let condition = true
let sayHi = condition ? () => {
    console.log("Hi")
} : () => {
    console.log("Yo!")
}

sayHi()

//递归阶乘
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         return num * factorial(num -1);
//     }
// }

function Factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num -1);// callee 指向正在执行函数指针
    }
}

// 严格模式下无法使用 arguments.callee 推荐使用如下的命名函数表达式
const factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});

function fib(n) {
    return fibImpl(0,1,n);
}

function fibImpl(a,b,n) {
    if (n === 0) {
        return a;
    }

    return fibImpl(b, a + b, n - 1);
}

function createComparisonFunction(propertyName) {
    return function(obj1, obj2) {
        let val1 = obj1[propertyName]
        let val2 = obj2[propertyName]
        
    }
}

// function getQueryString(url) {
//     if (typeof url === "string") {
//         let pos = url.indexOf("?");
//         if (pos > -1) {
//             return url.substring(pos + 1)
//         }
//     }
//     return "";
// }
function logError(sev, msg) {
    let img = new Image(),
        encodeSev = encodeURIComponent(sev),
        encodeMsg = encodeURIComponent(msg);
    img.src = `log.php?sev=${encodeSev}&msg=${encodeMsg}`;
}
for (let mod of mods) {
    try {
        mod.init();
    } catch(ex) {
        logError(`nonfatal", "Module init failed: ${ex.message}`)
    }
}

// 断言模式
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

// 模块模式
let singleton =  function() {
    
    let _val = 10;

    function privateFoo() {
        return false;
    }

    // 特权方法
    return {
        publicProp: true,

        publicMethod() {
            _val ++;
            return privateFoo();
        }
    }
}();
