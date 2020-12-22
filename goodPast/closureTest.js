(function(log){

    var myObject = (function (){
        var value = 0;

        return {
            increment: function (inc) {
                value += typeof inc === 'number' ? inc : 1;
            },
            getValue: function () {
                return value;
            }
        }
    })
    log('env is ok')

    var quo = function (status) {
        // var status;
        return {
            get_status : function () {
                return status;
            }
        };
    };

    var myQuo = quo("amazed");

    log(myQuo.get_status())
    log('quo')
})(console.log)