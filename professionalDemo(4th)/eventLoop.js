// console.log('Start!')
// setTimeout(() => {
//     console.log('Timeout! 宏')
// },0)

// Promise.resolve('Promise! 微').then( res => console.log(res))

// console.log('End call stack')

const one = () => Promise.resolve('One!')

async function myFunc() {
    console.log('In function!')
    const res = await one()
    // const res = one()
    console.log('等待await ')
    console.log(res)
}

console.log('Before function!')
myFunc()
console.log('After function!')