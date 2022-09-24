export  function register(instans, plugins) {
    if(typeof plugins === 'Array') {
        // 边界条件判断
    }
    plugins.forEach( plugin => {
        plugin(instans);// 逐个注册实例、如果有生命周期，将实例填入生命周期；
    });
}

// plugins

// const mainInstance = new mainFun([pluginDemo1, pluginDemo2])
//