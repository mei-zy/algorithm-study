const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const students = inputs[1].split(" ").map(Number);
const [b, c] = inputs[2].split(" ").map(Number);
let answer = students.length;

for (let student of students) {
  student -= b;
  if (student < 0) continue;
  // console.log("sty", student);
  // console.log(Math.ceil(student / c));
  answer += Math.ceil(student / c);
}
console.log(answer);
