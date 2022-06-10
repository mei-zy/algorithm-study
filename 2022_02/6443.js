const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];

for (let i = 0; i < n; i++) {
  const set = new Set();
  const str = inputs[1 + i];
  let tmp = "";

  const DFS = (curr, L) => {
    if (L === 3) {
      set.add(tmp);
      return;
    }

    for (let j = 0; j < str.length; j++) {
      if (curr === j) continue;
      tmp += str[j];
      DFS(j + 1, L + 1);
      tmp = tmp.slice(0, tmp.length);
    }
  };

  DFS(0, 0);
  console.log(set);
}
