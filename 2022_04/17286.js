const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const yumi = inputs[0].split(" ").map(Number);
const user = [];

for (let i = 0; i < 3; i++) {
  const location = inputs[i + 1].split(" ").map(Number);
  user.push(location);
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // fixed 를 제외한 모든 부분을 붙여준다.
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
};

const result = getPermutations(user, 3);
let answer = Infinity;
let nowLocation = yumi;
for (let j = 0; j < result.length; j++) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    // console.log("result", result[j]);
    // console.log(result[j][i]);
    sum += Math.sqrt(
      (nowLocation[0] - result[j][i][0]) ** 2 +
        (nowLocation[1] - result[j][i][1]) ** 2
    );
    // console.log(
    //   "sum",
    //   Math.sqrt(
    //     (nowLocation[0] - result[j][i][0]) ** 2 +
    //       (nowLocation[1] - result[j][i][1]) ** 2
    //   )
    // );
    nowLocation = result[j][i];
  }
  answer = Math.min(answer, sum);
}

console.log(answer);
