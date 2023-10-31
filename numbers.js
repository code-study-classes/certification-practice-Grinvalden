const calculateDistance = (a, b) => b - a;
console.log(calculateDistance(0, 5));
const calculateSegmentProduct = (a, b, c) => (c < a || c > b ? false : (c - a) * (b - c));
console.log(calculateSegmentProduct(-5, 5, 0));
