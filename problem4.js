function convertToRoman(num) {
    let roman = {
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
    };


    let result = '';
  
    for (let i of Object.keys(roman)) {
      let angkaRomawi = Math.floor(num / roman[i]);
      num -= angkaRomawi * roman[i];
      result += i.repeat(angkaRomawi);
    }
  
    return result;
  }

  module.exports = romanNumerals;
    // console.log(convertToRoman(6)) // VI
    // console.log(convertToRoman(9))  // IX
    // console.log(convertToRoman(23))   // XXIII
    // console.log(convertToRoman(2021)) // MMXXI
    // console.log(convertToRoman(1646)) // MDCXLVI
