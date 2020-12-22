var fs = require('fs');
var stream = fs.createReadStream('test.txt');
var colors = require('colors');
var files = fs.readdirSync(process.cwd())//获取工作目录下所有文件


files.forEach(function(file) {
    //监听‘.css’后缀文件
    if(/\.css/.test(file)){
        //监听当前路径变化的css文件
        fs.watchFile(process.cwd() + '/' + file, function(){
            console.log('-' + file + '发生了变化'.green)
        })
    }else{
        console.log('当前路径不存在css文件'.red)
    }
})
stream.on('data', function(chunk){
    // console.log('处理文件内容', chunk)
})

stream.on('end', function(chunk){
    console.log('文件读取完成回调', chunk)
})