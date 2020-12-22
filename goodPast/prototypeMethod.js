
    //prototype 封装
    Function.prototype.method = function (name, func){
        if(!this.prototype[name]){
            this.prototype[name] = func;
        }
        return this;//便于链式调用
    }