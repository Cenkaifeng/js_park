

const man = {
    name: 'xixi',
    age: 18,
    count: 99,
    say: () => {
        return 'xixi'
    }
}

interface Man {
    name: string;
    age: number;
    count: number;
    other?: string;
    [propname: string]: any;
    say(): string;
}

// implements 限制属性 前者必须附合后者定义
class boys implements Man {
    name = 'ss'
    age = 1
    count = 12
    say(){
        return 'xiexie'
    }
}

const screenResume = (man: Man)=> {
    man.age < 25 && man.count >=90 && console.log(man.name + '进入面试')
    man.age >= 25 && man.count < 90 && console.log(man.name + '等通知')
}

const getResume = (man: Man)=> {
    console.log(man.name + '年龄：' + man.age)
    console.log(man.name + '分数是' + man.count)
}

screenResume(man)
getResume(man)