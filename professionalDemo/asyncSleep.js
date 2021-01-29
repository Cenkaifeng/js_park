async function sleep(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}

async function foo(delay) {
    const t0 = Date.now();
    await sleep(delay); // 暂停约1500毫秒
    console.log(Date.now() - t0);
}
foo(1500);
// 1502

async function sleep(delay) {
     return new Promise( res => setTimeout(res, delay));
}

async function foo(delay) {
    const t0 = Date.now();
    await sleep(delay);
    console.log(Date.now() - t0)
}