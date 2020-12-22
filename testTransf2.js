
var testObj = {
    name: "Jervis_cen",
    type: "single",
    age: 20,
    height: 180,
    weight: 70,
    desc: 'the is a test obj data !'
}

function test1 (){
    let a = testObj.name,
        b = testObj.type,
        c = testObj.age,
        d = testObj.heigh,
        e = testObj.weigh,
        f = testObj.desc;
        return;
}

function test2 (){
    let {name, type, age, height, weight, desc} = testObj;
    return;
}


console.time("test1")
test1();//test1: 0.131ms
console.timeEnd("test1")


console.time("test2")
test2();//test2: 0.030ms
console.timeEnd("test2");

// var name ;
// var another_stooge;
// another_stooge.hasOwnProperty = null;
// for ( name in another_stooge){
//     if(another_stoooge.hasOwnProperty(name)){
//         console.log(name+':'+another_stooge[name])
//     }
// }

// var an = {}

// an += 1;

// console.log(an)

var list_key = new Set([1,2,3]);
console.log(list_key);
list_key.add(3);
list_key.add(3);
list_key.add('wang');
list_key.add('3');
list_key.delete('3');

console.log(list_key.size);
console.log(list_key);
