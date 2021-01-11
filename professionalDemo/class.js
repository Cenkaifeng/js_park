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
