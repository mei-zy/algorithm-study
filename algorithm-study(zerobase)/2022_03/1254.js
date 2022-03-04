const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .join("");

const len = inputs.length;

const isPalin = (len) => {
  const reversestr = inputs.slice(0, len).split("").reverse().join("");
  const tmpstr = inputs + reversestr;
  const half = parseInt(tmpstr.length / 2);
  let flag = true;

  for (let i = 0; i < half; i++) {
    if (tmpstr[i] !== tmpstr[tmpstr.length - 1 - i]) flag = false;
  }

  if (flag) return true;

  return false;
};

for (let i = 0; i < len; i++) {
  if (isPalin(i)) {
    console.log(i + len);
    return;
  }
}
