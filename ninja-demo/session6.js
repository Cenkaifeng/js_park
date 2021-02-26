// 异步

function* WeaponGenerator() {
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
}

// for ( let weapon of WeaponGenerator()) {
//     console.log(weapon);
// }

const weapoIterator = WeaponGenerator();

// console.log(weapoIterator.next())
// console.log(weapoIterator.next())
// console.log(weapoIterator.next())
// console.log(weapoIterator.next().done)

// 执行器交给另一个生成器

// function* WarriorGenerator() {
//     yield "Sun Tzu";
//     yield* NinjaGenerator();
//     yield "Genghis Khan";
// }

// function* NinjaGenerator() {
//     yield "Hattori";
//     yield "Yoshi";
// }

// for(let warrior of WarriorGenerator()) {
//     console.log(warrior);
// }

// 实用案例

function* IdGenerator() {
    let id = 0;
    while(true) {
        yield ++ id; 
    }
}

const idIterator = IdGenerator();

const ninja1 = { id: idIterator.next().value};
const ninja2 = { id: idIterator.next().value};
const ninja3 = { id: idIterator.next().value};

// console.log(ninja1);
// console.log(ninja2);
// console.log(ninja3);


// 传参

function* NinjaGenerator(action) {
    const imposter = yield ("Hattori " + action);

    console.log(imposter);

    yield ("Yoshi (" + imposter + ") " + action);
}

const ninjaIterator = NinjaGenerator("skulk");

// console.log(ninjaIterator.next().value);
// console.log(ninjaIterator.next("Hanzo").value);


// throw
function* ThrowError() {
    try {
        yield "Hattori";
    } catch(e) {
        console.error(new Error(e));
        
    }
}

const throwErrorIterator = ThrowError();
// console.log(throwErrorIterator.next().value)

// throwErrorIterator.throw('Catch this!')



// Promise

// const ninjaPromise = new Promise( (resolve, reject) => {
//     // resolve("Hattori");
//     reject("An error resolving a promise")
// });

// ninjaPromise.catch( e => {
//     console.log('看看有没有')
// }).then( ninja => {
//     console.log('xx',ninja)
// }, err => {
//     console.log(err)
// })



// function MyPromise(callback) {
    
//     then:() => {
//         return this
//     }
// }


// 查看Promise执行顺序

// console.log('start')
var ninjaDelayedPromise = new Promise( (resolve, reject) => {
    // console.log('ninjaDelayedPromise executor');
    setTimeout( () => {
        // console.log('Resolving ninjaDelayedPromise');
        resolve("heihei");
    },500)
})

// console.log(ninjaDelayedPromise)

ninjaDelayedPromise.then( ninja => {
    // console.log('then ' + ninja)
})

const ninjaImmediatePromise = new Promise( (resolve, reject) => {
    // console.log('ninjaImmediatePromise executor');
    resolve('yep!');
})

ninjaImmediatePromise.then( ninja => {
    // console.log(ninja)
})

// console.log('end')

// start
// ninjaDelayedPromise executor
// [Promise]
// ninjaImmediatePromise excutor
// end
// yep
// Resolving ninjaDelayedPromise
// then heihei


// 显式拒绝

const rejectPromise = new Promise((resolve, reject) =>{
    reject('Explicitly reject a promise');
})

rejectPromise.then(()=> console.log("Happy Path"), error => {
    // console.log('lalala', error)
})

// 隐式拒绝

const rejectPromise2 = new Promise((resolve, reject) => {
    undeclaredVariable ++;
})

rejectPromise2.then( () => console.log("Happy Path")
// , rej => console.log('reject',rej)
).catch(error => {
    // console.log('catch',error)
})

// 真实demo Promise 封装 xhr

function getJSON(url) {
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();

        request.open('GET', url);
        request.onload = function() {
            try {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(this.status + " " + this.statusText);
                }
            } catch (e) {
                reject(e.message);
            }
        }

        request.onerror = function() {
            reject(this.status + " " + this.statusText);
        }

        request.send();
    })
}

// 调用方式
// getJSON("xxxx").then( resolve => {
//     console.log(resolve);
// }, err => {
//     console.log(err);
// })

//链式调用

// getJSON("xxx")
// .then( ninjas => getJSON(ninjas))
// .then( xxx => getJSON(xxx))
// .catch( error => console.log(error));