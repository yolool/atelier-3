const numbers = [1, 7, 10, 9, 8];
const max = numbers.reduce((a, b) => a > b ? a : b);
console.log(max);