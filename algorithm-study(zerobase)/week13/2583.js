const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);

let Area = Array.from(Array(m), () => Array(n).fill(-1));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const findArea = (leftX, leftY, rightX, rightY) => {
  let xLength = Math.abs(leftX - rightX);
  let yLength = Math.abs(leftY - rightY);

  for (let i = m - leftY - yLength; i < m - leftY; i++) {
    for (let j = leftX; j < leftX + xLength; j++) {
      Area[i][j] = 1;
    }
  }
};
const BFS = (x, y) => {
  let extent = 1;

  let queue = [];
  queue.push([x, y]);
  Area[x][y] = 1;
  while (queue.length) {
    let [nx, ny] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let tmpx = nx + dx[i];
      let tmpy = ny + dy[i];

      if (
        tmpx >= 0 &&
        tmpx < m &&
        tmpy >= 0 &&
        tmpy < n &&
        Area[tmpx][tmpy] === -1
      ) {
        Area[tmpx][tmpy] = 1;
        extent++;
        queue.push([tmpx, tmpy]);
      }
    }
  }
  return extent;
};

let answer_count = 0;
let answer = [];

for (let i = 0; i < k; i++) {
  const [leftX, leftY, rightX, rightY] = input[i + 1].split(" ").map(Number);
  findArea(leftX, leftY, rightX, rightY);
}
for (let j = 0; j < m; j++) {
  for (let k = 0; k < n; k++) {
    if (Area[j][k] === -1) {
      answer_count++;
      answer.push(BFS(j, k));
    }
  }
}
answer.sort((a, b) => a - b);

console.log(answer_count);
console.log(answer.join(" "));
// console.log(Area);
