function _new(fn, ...args) {
    let o = {};
    o.__proto__ = fn.prototype;
    const res = fn.apply(o, ...args);
    return Object.prototype.toString.call(res) === "[Object Object]" ? res : o;
}

