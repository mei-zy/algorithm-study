const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const request = Array.from(Array(n), () => []);
const schedule = Array(n).fill(false);

let answer = 0;

for (let i = 0; i < n; i++) {
  const [day, money] = inputs[1 + i].split(" ").map(Number);
  const division = parseInt(money / day);

  request[i] = [day, money, division, i];
}

request.sort((a, b) => (a[2] === b[2] ? a[0] - b[0] : b[2] - a[2]));

for (let i = 0; i < request.length; i++) {
  const [day, money, division, requestDay] = request[i];
  let flag = false;

  if (requestDay + day > n) continue;
  for (let j = request; j < day + requestDay; j++) {
    if (schedule[j]) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    console.log(requestDay);
    for (let j = request; j < day + requestDay; j++) {
      schedule[j] = true;
    }
    answer += money;
  }
}

console.log(answer);
