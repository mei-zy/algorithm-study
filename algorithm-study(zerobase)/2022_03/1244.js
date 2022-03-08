let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let swich = [];
swich = input[1].split(" ").map(Number);
swich.unshift(0);
const studentNum = +input[2];

const switchNum = (num) => {
  if (num === 1) return 0;
  else return 1;
};
const boy = (location) => {
  for (let i = 1; i <= parseInt(n / location); i++) {
    swich[location * i] = switchNum(swich[location * i]);
  }
};

const girl = (location) => {
  let front = location - 1;
  let back = n - location;

  swich[location] = switchNum(swich[location]);
  if (front < back) {
    for (let i = 1; i <= front; i++) {
      if (swich[location - i] !== swich[location + i]) break;
      swich[location - i] = switchNum(swich[location - i]);
      swich[location + i] = switchNum(swich[location + i]);
    }
  } else {
    for (let i = 1; i <= back; i++) {
      if (swich[location - i] !== swich[location + i]) break;
      swich[location - i] = switchNum(swich[location - i]);
      swich[location + i] = switchNum(swich[location + i]);
    }
  }
};

for (let i = 0; i < studentNum; i++) {
  const [gender, location] = input[3 + i].split(" ");

  if (+gender === 1) {
    boy(+location);
  } else {
    girl(+location);
  }
}

swich.shift();
console.log(swich.join(" "));
