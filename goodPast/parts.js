(function (log) {
    log('parts is on')

    var eventuality = function (that) {
        var registry = {};
        /*  在一个对象上触发一个事件。该事件可以是一个包含事件名称的字符串
         *  或者是一个拥有包含事件名称的type属性对象
         */
        that.fire = function (event) {
            //在对象上触发组件方法模板
            var array,
                func,
                handler,
                i,
                type = typeof event === 'string' ? event : event.type;

            if (registry.hasOwnProperty(type)) {
                array = registry[type];
                for (i = 0; i < array.length; i += 1) {
                    handler = array[i]
                    //如果存在一组事件处理方法，把它遍历出来

                    func = handler.method;
                    if (typeof func === 'string') {
                        func = this[func]
                    }
                    //调用一个处理程序。 如果该条目包含参数，那么传递过去，否则传递该事件对象 TODO: 此处为啥用this?
                    func.apply(this,
                        handler.parameters || [event])

                }
            }
            return this;
        };
        //注册一个事件， 构造一条处理程序条目。将它插入到处理程序数组中，如果这种类型不存在，就构造一个
        that.on = function (type, method, parameters) {
            var handler = {
                method: method,
                parameters: parameters
            };
            if (registry.hasOwnProperty(type)) {
                registry[type].push(handler);
            } else {
                registry[type] = [handler];
            }
            return this;
        };
        return that;
    };


    //TODO: 下面是具体调用方式
    eventuality(this);

    on('test', function () { //声明方法
        log('testtesttess')
    })

    // this.test()

    fire('test') //调用方法
}(console.log))