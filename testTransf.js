
function test1 (){
    let a = 1,
        b = 2;
        [a,b] = [b,a];
        return;
}

function test2 (){
    let a = 1,
        b = 2;
        a ^= b;
        b ^= a;
        a ^= b;
        return;
}


console.time("test1")
test1();//test1: 0.132ms
console.timeEnd("test1")


console.time("test2")
test2();//test2: 0.069ms
console.timeEnd("test2");