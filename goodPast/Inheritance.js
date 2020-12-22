(function(log){
    log('pototype evn is on');


    
    var Mammal = function (name) {
        this.name = name;
    }
    Mammal.prototype.get_name = function () {
        return this.name;
    }
    Mammal.prototype.says = function () {
        return this.saying || '';
    }

    var myMammal = new Mammal('Herb the Mammal')

    var name =myMammal.get_name();
    log(name)


    var Dog = function (name) {
        this.name = name;
        this.saying = 'wangwang~'
    }

    Dog.prototype = new Mammal();

    //prototype 封装
    Function.prototype.method = function (name, func){
        if(!this.prototype[name]){
            this.prototype[name] = func;
        }
        return this;//便于链式调用
    }
    //继承父伪类
    Function.method('inherits',function (Parent){ 
        this.prototype = new Parent();
        return this;
    })

    var Cat = function (name) {
        this.name = name;
        this.saying = 'Cat';
    }
    .inherits(Mammal)
    .method('func_one',function(n){
        log('func_one' + n)
    })
    .method('func_two',function(){
        log('my func_two')
    })
    //创建构造函数
    // var myCat = new Cat();
    var myCat = Object.create(Cat.prototype);
    //调用方法
    myCat.func_one();
    myCat.func_two();

    //函数化模式调用父类方法

    Object.method('superior', function (name) {
        var that = this,
            method = that[name];
        return function () {
            return method.apply(that, arguments);
        }
    })

    
    var coolcat= function (spec) {
        var that = Cat(spec),
            super_get_name = that.superior('get_name');
        that.get_name = function (n) {
            return 'like' + super_get_name() + 'baby';
        };
        return that; //便于链式调用
    }

    

}(console.log))