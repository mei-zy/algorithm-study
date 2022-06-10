const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];

for (let i = 0; i < n; i++) {
  let [r, s] = inputs[i + 1].split(" ");

  r = +r;
  const temp = s
    .split("")
    .map((str) => str.repeat(r))
    .join("");
  console.log(temp);
}
