const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .split("\n");

const tree = new Map();
let count = 0;

for (let i = 0; i < inputs.length; i++) {
  tree.set(inputs[i], (tree.get(inputs[i]) || 0) + 1);
  count++;
}
// sort by key
const tmptree = [...tree.entries()].sort();
for (let j = 0; j < tmptree.length; j++) {
  console.log(tmptree[j][0], ((tmptree[j][1] / count) * 100).toFixed(4));
}
