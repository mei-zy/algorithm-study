const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

// example input
// const input = [150, 266, 427];

const [A, B, C] = input;

let ABC = String(A * B * C).split("");

for (let i = 0; i <= 9; i++) {
  console.log(`${ABC.filter((x) => x == i).length}`);
}
