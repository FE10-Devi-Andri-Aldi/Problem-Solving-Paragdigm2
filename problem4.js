const romawi = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

// -------------------------------- PROSES -------------------------------------------
function romanNumerals(value) {
    let result = '';

    for (key in romawi) { // key adalah index 
        result += // result penampung hasil akhir
            key.repeat(Math.floor(value / romawi[key]));
        value %= romawi[key]; 
    }
    return result;
};

// --------------------------------------- OUTPUT --------------------------------
console.log(romanNumerals(6))    // VI
console.log(romanNumerals(9))    // IX
console.log(romanNumerals(23))   // XXIII
console.log(romanNumerals(2021)) // MMXXI
console.log(romanNumerals(1646)) // MDCXLVI
