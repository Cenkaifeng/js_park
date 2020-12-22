//js自执行函数

//test for iife
(function(log){

(function(){
    log("1");
})()







// 最常用的两种写法
(function(){ /* code */ }()); // 老道推荐写法
(function(){ /* code */ })(); // 当然这种也可以

// 括号和JS的一些操作符（如 = && || ,等）可以在函数表达式和函数声明上消除歧义
// 如下代码中，解析器已经知道一个是表达式了，于是也会把另一个默认为表达式
// 但是两者交换则会报错
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();

// 如果你不怕代码晦涩难读，也可以选择一元运算符
!function(){ /* code */ }();
~function(){ /* code */ }();
-function(){ /* code */ }();
+function(){ /* code */ }();

// 你也可以这样
new function(){ /* code */ }
new function(){ /* code */ }() // 带参数






})(console.log)