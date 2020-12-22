let person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});

console.log(person.name);
person.name = "Gray";
console.log(person.name);

// 访问器属性
let book = {
    year_: 2017,
    edition: 1
};

Object.defineProperty(book, "year", {
    get() {
        return this.year_;
    },
    set (newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017
        }
    }
})


console.log(book.edition)
book.year = 2018
console.log(book.edition)

