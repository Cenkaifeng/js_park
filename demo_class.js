console.log('run demo_class.js')
class Foo {
    constructor() {
        // Foo = "bar" // 报错 Assignment to constant variable.
    }
}

const foo = new Foo()


console.log(typeof Foo) // function
console.log(typeof foo) // object
Foo = "baz"


// part 2


// let PersonClass = class PersonClass2 {
//     constructor(name) {
//         this.name = name;
//     }

//     sayName() {
//         console.log(this.name);
//     }
// };

// console.log(typeof PersonClass) // function
// console.log(typeof PersonClass2) // undefined

let PersonClass = (function () {
    "use strict";
    const PersonClass2 = function (name) {
        if (typeof new.target === "undefined") {
            throw new Error("必须通过关键字 new 调用构造函数");
        }
        this.name = name;
    }

    Object.defineProperty(PersonClass2.prototype, "sayName", {
        value: function () {
            if (typeof new.target !== "undefined") {
                throw new Error("不可使用new 关键字调用该方法");
            }
            console.log("in defineProperty", this.name);
        },
        enumerable: false,
        writable: true,
        configurable: true
    });
    return PersonClass2;
}())

console.log(typeof PersonClass) // function
console.log(typeof PersonClass2) // undefined

// part 3

// class CustomHTMLElement {
//     constructor(element) {
//         this.element = element
//     }
//     get html() {
//         return this.element.innerHTML;
//     }

//     set html(value) {
//         this.element.innerHTML = value
//     }

// }

// var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, 'html')

// console.log("get" in descriptor)
// console.log("set" in descriptor)

class MyClass {
    * createIterator() {
        yield 1;
        yield 2;
        yield 3;
    }
}

let instance = new MyClass();

let iterator = instance.createIterator();
let v = iterator.next();
console.log(v.value)
console.log(iterator)

v = iterator.next();
console.log(v.value)

v = iterator.next();
console.log(v.value)