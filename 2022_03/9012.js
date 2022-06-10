let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

for (let i = 0; i < n; i++) {
  const arr = input[i + 1];
  const stack = [];
  let flag = true;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") stack.push(arr[j]);
    else {
      if (stack.length) stack.pop();
      else flag = false;
    }
  }
  if (!flag || stack.length) {
    console.log("NO");
  } else console.log("YES");
}
