let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const timeArr = [];
let score = [0, 0];
let time = [0, 0];

for (let i = 0; i < n; i++) {
  const [team, goaltime] = input[i + 1].split(" ");
  const [goalm, goals] = goaltime.split(":").map(Number);

  timeArr.push([+team, goalm * 60 + goals]);
}

for (let j = 0; j < n - 1; j++) {
  const [curTeam, curTime] = timeArr[j];
  const [nextTeam, nextTime] = timeArr[j + 1];

  score[curTeam - 1]++;
  if (curTeam !== nextTeam) {
    if (score[curTeam - 1] <= score[nextTeam - 1]) continue;
  }
  time[curTeam - 1] += nextTime - curTime;
}
console.log(time, score);
let reverse = 0;
const [lastTeam, lastTime] = timeArr[n - 1];
if (lastTeam === 1) reverse = 2;
else reverse = 1;
score[lastTeam - 1]++;
console.log(score);
if (score[lastTeam - 1] > score[reverse - 1]) {
  time[lastTeam - 1] += 2880 - lastTime;
}

console.log(time);
