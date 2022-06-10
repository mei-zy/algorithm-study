const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const findCurrentArea = (hour) => {
  if (hour >= 10 && hour < 12) {
    return 5;
  } else if (hour >= 8 && hour < 10) {
    return 4;
  } else if (hour >= 6 && hour < 8) {
    return 3;
  } else if (hour >= 4 && hour < 6) {
    return 2;
  } else if (hour >= 2 && hour < 4) {
    return 1;
  } else {
    return 0;
  }
};

let [currentH, currentM] = inputs[0].split(":").map(Number);
let timeArr = inputs[1].split(" ").map(Number);

const n = +inputs[2].split(" ").map(Number);
let solved = 0;
let currentTime = 0;

for (let i = 3; i < 3 + n; i++) {
  const [time, event] = inputs[i].split(" ");

  if (solved === timeArr.length) break;
  if (currentTime + time > 60) break;

  if (event === "^") {
    const current = findCurrentArea(currentH);
    timeArr[current] = Infinity;
    solved++;
  } else {
    const regTime = Number(event.replaceAll(/[A-Z]/g, ""));
    const regM = event.replaceAll(/[0-9]/g, "");

    if (regM === "HOUR") {
      currentH += regTime;
    } else {
      currentM += regTime;

      while (currentM >= 60) {
        currentH++;
        currentM -= 60;
      }
    }

    if (currentH >= 12) currentH -= 12;
  }
  currentTime += Number(time);
}

let answer = 0;

for (let i = 0; i < timeArr.length; i++) {
  if (timeArr[i] === Infinity) continue;
  answer += timeArr[i];
}

if (answer >= 100) console.log(100);
else console.log(answer);
