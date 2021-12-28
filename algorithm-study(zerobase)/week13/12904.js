const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const S = input[0];
const T = input[1];
// console.log(S, T);

let queue = [];
let setH = new Set();
queue[queue.length] = S;
const BFS = () => {
  while (queue.length) {
    let tmpString = queue.shift();
    if (tmpString === T) return 1;
    if (tmpString.length > T.length) return 0;

    let addToLastA = tmpString + "A";
    let reverseStrAddToB = tmpString.split("").reverse().join("") + "B";

    if (!setH.has(addToLastA)) queue.push(addToLastA);
    if (!setH.has(reverseStrAddToB)) queue.push(reverseStrAddToB);
  }
};

console.log(BFS());
