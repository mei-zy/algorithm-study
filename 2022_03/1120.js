const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .join("");

let [str1, str2] = inputs.split(" ");

const calDifferent = (string1, string2) => {
  let cnt = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) cnt++;
  }
  return cnt++;
};

while (str1.length < str2.length) {
  let tmpstr_back = str2.slice(-str1.length, str2.length);
  let tmpstr_front = str2.slice(0, str1.length);

  let back = calDifferent(str1, tmpstr_back);
  let front = calDifferent(str1, tmpstr_front);

  if (back < front) {
    // 뒤에서 붙인게 나은거니까 앞에 붙이기
    str1 = str2[str2.length - str1.length] + str1;
  } else {
    str1 = str1 + str2[str1.length + 1];
  }
}

let answer = 0;

for (let i = 0; i < str2.length; i++) {
  if (str1[i] !== str2[i]) answer++;
}

console.log(answer);
