// 函数生命能提前但是类不能
console.log(FunctionExpression);   // undefined
var FunctionExpression = function() {};
console.log(FunctionExpression);   // function() {}

console.log(FunctionDeclaration);  // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration);  // FunctionDeclaration() {}

console.log(ClassExpression);      // undefined
var ClassExpression = class {};
console.log(ClassExpression);      // class {}

// console.log(ClassDeclaration);     // ReferenceError: ClassDeclaration is not defined
// class ClassDeclaration {}
// console.log(ClassDeclaration);     // class ClassDeclaration {}

// 如何理解es6 class ， 实际上是es5组合继承的语法糖



// js class 本质为特殊函数，函数仍然是js的一等公民

class Person {}

console.log(Person);         // class Person {}
console.log(typeof Person);  // function
console.log(Person.constructor instanceof Function)

// extends 继承关键字


// super()

// 多类继承（mixin class)

class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
  foo() {
    console.log('foo');
  }
};
let BarMixin = (Superclass) => class extends Superclass {
  bar() {
    console.log('bar');
  }
};
let BazMixin = (Superclass) => class extends Superclass {
  baz() {
    console.log('baz');
  }
};

class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}

let b = new Bus();
b.foo();  // foo
b.bar();  // bar
b.baz();  // baz

// 经过优化
class Vehicle {}

let FooMixin = (Superclass) => class extends Superclass {
  foo() {
    console.log('foo');
  }
};
let BarMixin = (Superclass) => class extends Superclass {
  bar() {
    console.log('bar');
  }
};
let BazMixin = (Superclass) => class extends Superclass {
  baz() {
    console.log('baz');
  }
};

function mix(BaseClass, ...Mixins) {
  return Mixins.reduce((accumulator, current) => current(accumulator), BaseClass);
  //通过累加器把嵌套引用展平
}

class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin) {}

let b = new Bus();
b.foo();  // foo
b.bar();  // bar
b.baz();  // baz