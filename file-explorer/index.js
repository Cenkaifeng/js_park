(function (log) {
    /**
     * Module dependencies
     */
    var fs = require('fs'),
        stdin = process.stdin,
        stdout = process.stdout

    log('someApi is on')

    //获取用户文件表
    // log(fs.readdirSync(__dirname));//同步方法
    fs.readdir(process.cwd(), async);

    function async (err, files) { //异步方法
        log(files);
        var stats = [];
        let line = '------'
        log(line)
        if (!files.length){
             return log(' \033(32m No files to show! \033[39m\n');
        }
        log('   选择你想看的文件路径\n');

        function file(i) {
            var filename = files[i];
            fs.stat(__dirname + '/' + filename, function (err, stat) {
                stats[i] = stat //保存读取的stat
                if (stat.isDirectory()) {
                    log('       ' + i + ' \033[36m' + filename + '/\033[39m');
                } else {
                    log('       ' + i + ' \033[36m' + filename + '/\033[39m');
                }
                i++;
                if (i == files.length) {
                    read()
                } else {
                    file(i)
                }
            })

            //读取用户输入
            function read() {
                log(line);
                stdout.write('      \033[39m输入你的选择: \033[39m');
                stdin.resume();
                stdin.setEncoding('utf8')

                stdin.on('data', option);
            }

            //支持用户读取的option回调
            function option(data) {
                if (!files[Number(data)]) {
                    stdout.write('      \033[31m输入你的选择: \033[39m')
                } else {
                    stdin.pause() //检查通过将流停止
                    if (stats[Number(data)].isDirectory()) {
                        fs.readdir(__dirname + '/' + filename, function(err, files){
                            log(line);
                            log('       (' + files.length + 'files)');
                            files.forEach(function(file){
                                log('       -   ' + file);
                            })
                            log(line)
                        })
                    } else {
                        fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
                            log(data)
                            log(line)
                            log('\033[90m' + data.replace(/(.*)/g, '        $1') + '\033[39m')
                        })
                    }

                }
            }
        }

        file(0)
        log(line);


    }











})(console.log)