import { parse } from "micromatch";

const calculateDistance = (a, b) => Math.abs(b - a);
console.log(calculateDistance(0, 5));

const calculateSegmentProduct = (a, b, c) => ((c < a || c > b) ? false : (c - a) * (b - c));
console.log(calculateSegmentProduct(-5, 5, 0));

const calculateKilobytes = (fileSizeInBytes) => Math.trunc(fileSizeInBytes / 1024);
console.log(calculateKilobytes(15000));

const calculateSegments = (lengthA, lengthB) => ((lengthA > lengthB) ? Math.trunc(lengthA / lengthB) : false);
console.log(calculateSegments(8, 5));

const calculateDigitSum = (twoDigitNumber) => {
    return parseInt(String(twoDigitNumber).slice(0, 1)) + parseInt(String(twoDigitNumber).slice(1, 2));
};
console.log(calculateDigitSum(25));

const swapHundredsAndTens = (threeDigitNumber) => `${String(threeDigitNumber).slice(1, 2)}${String(threeDigitNumber).slice(0, 1)}${String(threeDigitNumber).slice(2, 3)}`;
console.log(swapHundredsAndTens(123));

const getHundredsDigit = (number) => {
    if (number <= 999){
    return 0;}
    else if (number >= 9999){ 
        return parseInt((number / 1000) % 10);
    }
    return parseInt((number / 100) % 10);
};
console.log(getHundredsDigit(1239));

const getFullHours = (seconds) => parseInt(seconds / 3600);
console.log(getFullHours(18000));

const countSquares = (A, B, C) => parseInt((A * B) / (C ** 2));
console.log(countSquares(5, 10, 3));
