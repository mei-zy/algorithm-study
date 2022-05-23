const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let input = inputs[0];
input = input.toUpperCase();

if (input.length === 1) console.log(input);
else {
  let table = new Map();
  for (const alphabet of input) {
    if (table.has(alphabet)) table.set(alphabet, table.get(alphabet) + 1);
    else table.set(alphabet, 1);
  }
  console.log(table);

  table = [...table.entries()].sort((a, b) => b[1] - a[1]);

  let firstVal;
  for (const [key, val] of table.entries()) {
    if (key === 0) firstVal = val;
    else {
      if (firstVal[1] === val[1]) {
        console.log("?");
        break;
      } else {
        console.log(firstVal[0]);
        break;
      }
    }
  }
}
