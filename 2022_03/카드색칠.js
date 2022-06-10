let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, q] = input[0].split(" ").map(Number);
const map = new Map();
let myNum = 0;

for (let i = 0; i < q; i++) {
  const [a, b, c] = input[1 + i].split(" ").map(Number);

  if (a === 1) {
    map.set(c, (map.get(c) || 0) + b);
    if (c === n + 1) myNum += b;
  } else {
    const sorting = [...map].sort((a, b) => b[1] - a[1]);
    const tmpMynum = myNum + b;

    if (tmpMynum < sorting[0][1] + c) console.log("NO");
    else console.log("YES");
  }
}
