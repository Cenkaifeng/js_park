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