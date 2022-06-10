let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input[0];

let tmp = 1;
for (let i = 0; i < t; i++) {
  const [n, m] = input[tmp++].split(" ").map(Number);
  const number = input[tmp++].split(" ").map((item, num) => [+item, num]);

  let answer = Array(n).fill(0);
  let cnt = 0;

  while (number.length) {
    const [x, location] = number.shift();
    let len = number.length;

    let flag = false;
    for (let j = 0; j < len; j++) {
      if (number[j][0] > x) {
        flag = true;
        number.push([x, location]);
        break;
      }
    }
    if (!flag) {
      answer[location] = cnt + 1;
      cnt += 1;
    }
  }
  console.log(answer[m]);
}
