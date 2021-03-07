// getter setter

function NinjaOrigin() {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;
    this.setSkillLevel = value => skillLevel = value;
}

// 上面demo 只能通过get set 来读写skillLevel 变量；

const ninjaCollection = {
    ninjas: ["Yoshi", "Kuma", "Hattori"],

    get firstNinja() {
        console.log("Getting firstNinja");
        return this.ninjas[0];
    },

    set firstNinja(value) {
        console.log("Setting firstNinja")
        this.ninjas[0] = value;
    }
}

ninjaCollection.firstNinja = 'xxxx'
console.log(ninjaCollection.firstNinja)

// ES5 支持了对象的getter setter

class ninjaCollection2 {
    constructor() {
        this.ninjas = ["Yoshi", "Kuma"]
    }

    get firstNinja() {
        return this.ninjas[0];
    }

    set firstNinja(value) {
        this.ninjas[0] = value;
    }
}

//  用defineProperty 定义真正能获取私有变量的getter setter

function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: ()=> {
            return _skillLevel;
        },
        set: (val)=> {
            if(!Number.isInteger(val)){
                throw new TypeError("skill level must be a number")
            }
            _skillLevel = val;
        }
    })
}