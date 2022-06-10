const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = inputs[0].split(" ").map(Number);

const bfs = () => {
  const q = [[n, 0]];
  const visited = new Array(100001).fill(false);
  visited[n] = true;

  while (q.length) {
    const [location, time] = q.shift();

    if (location === k) {
      console.log(time);
      return;
    }

    for (let next of [location * 2, location - 1, location + 1]) {
      if (next < 0 || next > 100000 || visited[next]) continue;

      if (next === location * 2) {
        q.unshift([next, time]);
      } else {
        q.push([next, time + 1]);
      }
      visited[next] = true;
    }
  }
};

bfs();
