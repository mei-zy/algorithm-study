const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const arr = Array.from(Array(n), () => []);

for (let i = 1; i <= n; i++) {
  arr[i - 1] = inputs[i].split(" ").map(Number);
}

let answer = Array(3).fill(0);

const dfs = (arr) => {
  if (arr.length === 1) {
    answer[arr[0] + 1]++;
    return;
  }

  let tmp = Array(3).fill(0);
  let max = arr.length * arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      tmp[arr[i][j] + 1]++;
    }
  }

  if (tmp[0] === max || tmp[1] === max || tmp[2] === max) {
    if (tmp[0] === max) answer[0]++;
    else if (tmp[1] === max) answer[1]++;
    else answer[2]++;

    return;
  }

  const Base = parseInt(arr.length / 3);
  for (let i = 0; i < arr.length; i += Base) {
    let tmp = [];
    for (let j = i; j < i + 3; j++) {
      const z = [];
      for (let k = j; k < j + 3; k++) {
        z.push(arr[i][j]);
      }
      tmp.push(z);
    }
    dfs(tmp);
  }
};

dfs(arr);
