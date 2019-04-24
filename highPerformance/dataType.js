(function(){
    /**
     * @param {String} type
     * @param {*} param 
     */
    const typeTest = function (type,params) {

        const judgeList = [
            'Number',
            'String',
            'Array',
            'Undefined',
            'null'
        ];
        if (judgeList.indexOf(type) === -1) {
            console.error('No such type');
            return
        }
        let typeStr = Object.prototype.toString.call(params);
        // console.log(typeof typeStr)
        // console.log(typeStr)
        // console.log(typeStr.indexOf(type) !== -1)
        return typeStr.indexOf(type) !== -1;
    }

    typeTest('String', '');
    typeTest('String', 1);
    typeTest('String', []);
}())