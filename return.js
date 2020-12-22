//函数返回值测试


function test1 (){
    var a = "str";
}

function test2 (){
    return;
}

function test3 (){
    return true;
}

function test4 (){
    var arr = [];
    return arr;
}
function test5 (){
    return this;
}
function test6 (obj){
    return obj;
}
console.log(test1());//函数默认返回值 undefined
console.log(test2());//写了return 默认也是undefined
console.log(test3());//boolean
console.log(test4());//返回数组
// console.log(test5()); 调用自己疯狂报错
console.log(new test6(test4)());//构造函数返回值后直接调用构造函数
