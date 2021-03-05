// getter setter

function NinjaOrigin() {
    let skillLevel;
    this.getSkillLevel = () => skillLevel;
    this.setSkillLevel = value => skillLevel = value;
}

// 上面demo 只能通过get set 来读写skillLevel 变量；

// ES5 支持了对象的getter setter

