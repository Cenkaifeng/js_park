(function () {
    class Util {
        constructor() {}

        checkKit(params, options) {

            //TODO: 对params 做类型判断 数字浮点数为 1 , 字符串为2
            let options = {
                type: options.type || 0,

            }

            switch (options.type) {
                case 1: //数字类型 电话号码
                    let rgx = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
                    if (params && !rgx.test(params)) {
                        console.log()
                        return true;
                    } else {
                        return false;
                    }
                    break;
                case 2: //身份证
                    {

                    }
            }

        }
        //dai
        serialize(obj, name) {
            var result = "";

            function serializeInternal(o, path) {
                for (p in o) {
                    var value = o[p];
                    if (typeof value != "object") {
                        if (typeof value == "string") {
                            result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "] = " + "\"" + value.replace(/\"/g, "\\\"") + "\"" + ";";
                        } else {
                            result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "] = " + value + ";";
                        }
                    } else {
                        if (value instanceof Array) {
                            result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]" + "=" + "new Array();";
                            serializeInternal(value, path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]");
                        } else {
                            result += "\n" + path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]" + "=" + "new Object();";
                            serializeInternal(value, path + "[" + (isNaN(p) ? "\"" + p + "\"" : p) + "]");
                        } 
                    }
                }
            }
            serializeInternal(obj, name);
            return result;
        }
        
                                                                    
    }
    module.exports = new Util()
})()
