const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const r = +inputs[0];
const PI = Math.PI;

const circle = (PI * r * r).toFixed(6);
const taxi = (2 * r * r).toFixed(6);

console.log(circle, taxi);
