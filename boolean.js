export const isPositive = (A) => (A <= 0) ? false : true;
console.log(isPositive(0));

export const isOdd =(A) => (A % 2 !== 0) ? true : false;
console.log(isOdd(4));

export const checkInequality = (A, B) => (A > 2 && B <= 3) ? true : false;
console.log(checkInequality(1, 3));

export const checkInequality2 = (A, B) => (A >= 0 || B < -2) ? true : false;
console.log(checkInequality2(0, 7));

export const checkBetweenNumbers = (A, B, C) => (A < B && B < C) ? true : false;
console.log(checkBetweenNumbers(2, 3, 4));

export const checkOddThreeDigitNumber = (number) => {
    if ((number < 100) || (number > 999)) {
        return false;
    };
    return (number % 2 !== 0) ? true : false;
};
console.log(checkOddThreeDigitNumber(454));

export const checkUniqueDigits = (number) => {
    if (number < 100 && number > 999) {
        return false;
    };
    number = String(number);
    let firstSymbol = number[0];
    let secondSymbol = number[1];
    let thirdSymbol = number[2]; 
    return ((firstSymbol !== secondSymbol) && (secondSymbol !== thirdSymbol) && (firstSymbol !== thirdSymbol)) ? true : false;
};
console.log(checkUniqueDigits(2234));

export const isSecondQuadrant = (x, y) => ((x < 0) && (y > 0)) ? true : false;
isSecondQuadrant();

export const isIsoscelesTriangle = (a, b, c) => 
((a === b && a !== c) || (a === c && a !== b ) || (b === c && a !== b)) ? true : false;
isIsoscelesTriangle();

export const areSameColorFields = (x1, y1, x2, y2) => {
    if (((x1, x2, y1, y2) >= 1) && ((x1, x2, y1, y2) <= 8)){
  return ((((x1 % 2 === 0 && y1 % 2 === 0) || (x1 % 2 !== 0 && y1 % 2 !== 0)) && ((x2 % 2 === 0 && y2 % 2 === 0) || (x2 % 2 !== 0 && y2 % 2 !== 0))) ||
    (((x2 % 2 === 0 && y2 % 2 !== 0) || (x2 % 2 !== 0 && y2 % 2 === 0)) && ((x1 % 2 === 0 && y1 % 2 !== 0) || (x1 % 2 !== 0 && y1 % 2 === 0))) ? true : false);
      }
  };
  console.log(areSameColorFields(1, 1, 2, 2));

