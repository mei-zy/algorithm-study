const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(inputs[0]);
const area = [];
let answer = 0;
const set = new Set();

set.add(n);
set.add(0);

for (let i = 0; i < n; i++) {
  area.push(
    inputs[i + 1].split(" ").map((element) => {
      set.add(Number(element));
      return Number(element);
    })
  );
}

let direction_x = [-1, 0, 0, 1];
let direction_y = [0, -1, 1, 0];

function BFS(x, y, tmparr) {
  let queue = [];

  queue.push([x, y]);

  while (queue.length) {
    let [tmp_x, tmp_y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let dx = tmp_x + direction_x[i];
      let dy = tmp_y + direction_y[i];

      if (dx >= 0 && dx < n && dy >= 0 && dy < n && tmparr[dx][dy] === 1) {
        queue.push([dx, dy]);
        tmparr[dx][dy] = 0;
      }
    }
  }
}

for (let height of set) {
  let tmp_arr = Array.from(Array(n), () => Array(n));
  let tmp_answer = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (area[i][j] > height) tmp_arr[i][j] = 1;
      else tmp_arr[i][j] = 0;
    }
  }
  // console.log(height);
  // console.log(tmp_arr);

  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (tmp_arr[j][k] === 1) {
        BFS(j, k, tmp_arr);
        tmp_answer++;
      }
    }
  }
  answer = Math.max(tmp_answer, answer);
}

console.log(answer);
