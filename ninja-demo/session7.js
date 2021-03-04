// 面向对象

const yoshi = { shulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };


Object.setPrototypeOf(yoshi, hattori);
Object.setPrototypeOf(hattori, kuma);

// 通过原型的方式创造新实例

function Ninja() {
    this.swingSword = function() {
        return false;
    }
};

Ninja.prototype.swingSword = function () {
    return true;
};

const ninja1 = new Ninja();

ninja1.swingSword = function() {
    return ":sss";
}
console.log(ninja1.swingSword())

// console.log("____________");

console.log("ninja1.__proto__: ",ninja1.__proto__)
console.log("ninja1.prototype: ",ninja1.prototype)
console.log("ninja1.constructor: ",ninja1.constructor)
console.log("Ninja.constructor: ",Ninja.constructor)
console.log("Ninja.prototype: ",Ninja.prototype)
console.log("Ninja.prototype.__proto__: ",Ninja.prototype.__proto__)
console.log("Function.prototype: ",Function.prototype)

console.log("____________");
