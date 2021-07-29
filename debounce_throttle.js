
// 防抖
function debounce(fn, delay = 300 ) {

    let timer;
    return function () {
        const args = arguments;

        if ( timer ) {
            clearTimeout(timer)
        }

        timer = setTimeout( _ => {
            fn.apply(this, args);

        }, delay);
    }
}

window.addEventListener( "scroll", debounce( _ => {
    console.log('debounce on')
}, 1000));


// 节流
function throttle( fn, delay ) {
    let flag = true;
    return _ => {
        if (!flag) return;
        flag = false;
        timer = setTimeout( _=> {
            fn();
            flag = true;
        }, delay)
    }
}

window.addEventListener( "scroll", throttle( _=> {
    console.log("throttle on")
},1000))

function throttle(fn, delay = 1000) {
    let flag = true;
    return _ => {
        if( !flag ) return;
        flag = false;
        timer = setTimeout( _ => {
            fn();
            flag = true;
        }, delay)
    }
}
