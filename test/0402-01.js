const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +inputs[0];
const price = inputs[1].split(" ").map(Number);

let index = 2;

let saleInfo = Array.from(Array(n), () => []);

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

let permutation = [];

// 입력받는 부분
for (let i = 0; i < n; i++) {
  const p = +inputs[index++];

  for (let j = 0; j < p; j++) {
    const [num, sale] = inputs[index++].split(" ").map(Number);
    saleInfo[i].push([num - 1, sale]);
  }
  permutation[i] = i;
}

const result = getPermutations(permutation, n);
let answer = Infinity;

for (let i = 0; i < result.length; i++) {
  let tmpAnswer = 0;
  let tmpPrice = [...price];

  for (let j = 0; j < n; j++) {
    const cur = result[i][j];
    tmpAnswer += tmpPrice[cur];
    tmpPrice[cur] = 0;

    if (tmpAnswer >= answer) break;

    for (let t = 0; t < saleInfo[cur].length; t++) {
      const [saleNum, salePrice] = saleInfo[cur][t];

      if (tmpPrice[saleNum] === 0) continue;

      if (tmpPrice[saleNum] <= salePrice) tmpPrice[saleNum] = 1;
      else tmpPrice[saleNum] -= salePrice;
    }
  }

  if (answer > tmpAnswer) answer = tmpAnswer;
}

console.log(answer);
