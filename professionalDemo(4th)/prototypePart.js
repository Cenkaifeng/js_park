/**
 * 构造函数可以是函数表达式
 * 也可以是函数声明，因此以下两种形式都可以：
 *   function Person() {}
 *   let Person = function() {}
 */
function Person() {}

/**
 * 声明之后，构造函数就有了一个
 * 与之关联的原型对象：
 */
console.log(typeof Person.prototype);
console.log(Person.prototype);
// {
//   constructor: f Person(),
//   __proto__: Object
// }

/**
 * 如前所述，构造函数有一个prototype属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor属性，引用这个构造函数
 * 换句话说，两者循环引用：
 */
console.log(Person.prototype.constructor === Person); // true

/**
 * 正常的原型链都会终止于Object的原型对象
 * Object原型的原型是null
 */
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null); // true

console.log(Person.prototype.__proto__);
// {
//   constructor: f Object(),
//   toString: ...
//   hasOwnProperty: ...
//   isPrototypeOf: ...
//   ...
// }


// let person1 = new Person(),
//     person2 = new Person();

/**
 * 构造函数、原型对象和实例
 * 是3个完全不同的对象：
 */
// console.log(person1 !== Person);           // true
// console.log(person1 !== Person.prototype); // true
// console.log(Person.prototype !== Person);  // true

/**
 * 实例通过__proto__链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]]
 *
 * 构造函数通过prototype属性链接到原型对象
 *
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */
// console.log(person1.__proto__ === Person.prototype);   // true
// conosle.log(person1.__proto__.constructor === Person); // true

// /**
//  * 同一个构造函数创建的两个实例
//  * 共享同一个原型对象：
//  */
// console.log(person1.__proto__ === person2.__proto__); // true

// /**
//  * instanceof检查实例的原型链中
//  * 是否包含指定构造函数的原型：
//  */
// console.log(person1 instanceof Person);           // true
// console.log(person1 instanceof Object);           // true
// console.log(Person.prototype instanceof Object);  // true


// 原型模式

// function SuperType() {
//     this.property = true;
// }

// SuperType.prototype.getSuperValue = function() {
//     return this.property;
// }

// function SubType() {
//     this.subproperty = false;
// }

// // 继承SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function () {
//     return this.subproperty;
// }

// console.log('继承 st')
// let instance = new SubType();
// console.log(instance.getSuperValue());// true

// 默认原型模式 子类覆盖父类

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType;

// 新方法

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

// 覆盖已有方法

SubType.prototype.getSuperValue = function () {
    return false;
};

let instance = new SubType;

console.log(instance.getSuperValue()); //false

console.log('____________组合原型继承')

function SuperTypeG(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperTypeG.prototype.sayName = function () {
    console.log(this.name);
};

function SubTypeG(name, age) {
    // 继承属性
    SuperTypeG.call(this, name);
    this.age = age;
}

SubTypeG.prototype = new SuperTypeG();

SubTypeG.prototype.sayAge = function () {
    console.log(this.age);
}

let instanceG = new SubTypeG("NICO", 23);
instanceG.colors.push("black");
console.log(instanceG.colors);
instanceG.sayName();
instanceG.sayAge();

let instanceG2 = new SubTypeG("Eys", 233);
instanceG2.colors.push("pink");
console.log(instanceG2.colors);
instanceG2.sayName();
instanceG2.sayAge();

console.log('____________原型式继承')
// 原型式继承

function object(o) {
    function F() {}
    F.prototype = o
    return new F();
}

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

let anotherPerson = object(person) // Object.create(person)

anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie")

console.log(person.friends)

// 寄生继承
console.log('_____________寄生继承')

function createAnother(original) {
    let clone = object(original);
    clone.sayHi = function () {
        console.log("hi")
    }
    return clone;
}

let person2 = {
    name: "ni",
    friends: ["xixi"]
}

let anotherPerson2 = createAnother(person2);
anotherPerson2.sayHi() //通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。


// 优化继承方法

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype); // 创建对象
    prototype.constructor = subType; // 增强对象
    subType.prototype = prototype; // 赋值对象
}

// 寄生组合继承 被称为Es5 以前伪类写法最优解
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name); // 第二次调用SuperType()

    this.age = age;
}

SubType.prototype = new SuperType(); // 第一次调用SuperType()
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
    console.log(this.age);
};