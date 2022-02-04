const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(inputs.shift());
const words = [];

for (let i = 0; i < n; i++) {
  if (words.includes(inputs[i])) continue;
  words.push(inputs[i]);
}
words
  .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
  .sort((a, b) => a.length - b.length);

words.forEach((element) => {
  console.log(element);
});
