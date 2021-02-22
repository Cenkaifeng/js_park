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

