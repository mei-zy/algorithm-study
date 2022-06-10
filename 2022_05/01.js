const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = inputs[0].split(" ").map(Number);
const x = parseInt(a - a * (b / 100));

if (x >= 100) console.log(0);
else console.log(1);
