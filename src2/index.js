const util = require("./util1");

const { lgNum, cut3 } = require("./util2");

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];

console.log(util.sum(numArr));

console.log(util.concat(numArr, wordArr));

console.log(lgNum(numArr));

console.log(cut3(wordArr));
