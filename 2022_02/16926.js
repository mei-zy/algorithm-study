const input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, r] = input[0].split(" ").map(Number);
const map = [];

for (let i = 0; i < m; i++) {
  map = input[i + 1].split(" ").map(Number);
}

for (let i = 0; i < r; i++) {
  let [topleft, topright] = [
    [0, 0],
    [0, m - 1],
  ];
  let [botleft, botright] = [
    [n - 1, 0],
    [n - 1, m - 1],
  ];
  for (let j = 0; j < parseInt(m / 2); j++) {
    [topleft, topright] = [
      [topleft[0] + 1, topleft[1] + 1],
      [topright[0] + 1, topright[1] - 1],
    ];
    [botleft, botright] = [
      [botleft[0] - 1, botleft[1] + 1],
      [botleft[1] - 1, botright[1] - 1],
    ];
  }
}
