enum v {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}

function romanToInt(s: string): any {
    let res = 0

    for (let i = 0; i < s.length; i++) {
        console.log(s[i])

        console.log(s[i] in v)
    }
    // return 0

};

romanToInt("III")