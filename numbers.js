import { parse } from "micromatch";

export const calculateDistance = (a, b) => Math.abs(b - a);
console.log(calculateDistance(0, 5));

export const calculateSegmentProduct = (a, b, c) => ((c < a || c > b) ? false : (c - a) * (b - c));
console.log(calculateSegmentProduct(-5, 5, 0));

export const calculateKilobytes = (fileSizeInBytes) => Math.trunc(fileSizeInBytes / 1024);
console.log(calculateKilobytes(15000));

export const calculateSegments = (lengthA, lengthB) => ((lengthA >= lengthB) ? Math.trunc(lengthA / lengthB) : false);
calculateSegments();

export const calculateDigitSum = (twoDigitNumber) => {
    return parseInt(String(twoDigitNumber).slice(0, 1)) + parseInt(String(twoDigitNumber).slice(1, 2));
};
console.log(calculateDigitSum(25));

export const swapHundredsAndTens = (threeDigitNumber) => {
let str = String(threeDigitNumber);
str = str[1] + str[0] + str[2];
return Number(str);}
console.log(swapHundredsAndTens(123));

export const getHundredsDigit = (number) => {
    if (number <= 999){
    return 0;
}
    return parseInt((number / 100) % 10);
};
console.log(getHundredsDigit(1239));

export const getFullHours = (seconds) => Math.floor(seconds / 3600);
console.log(getFullHours(18000));

export const countSquares = (A, B, C) => parseInt((A * B) / (C ** 2));
console.log(countSquares(5, 10, 3));

