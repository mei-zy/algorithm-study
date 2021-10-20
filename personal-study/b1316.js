let input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let N = Number(input[0]);

let answer = 0;
// let word = new Array(N);
// for (let i = 0; i < N; i++) {
//   word[i] = input[i + 1].split("");
// }
// word[N - 1].push("\r");
// console.log(word);
// 노드js '\r' 로 일관되게 할 수 있게끔

for (let i = 0; i < N; i++) {
  let word = input[i + 1].trim();
  let map = new Map();
  let groupword = true;
  for (let j = 0; j < word.length; j++) {
    let key = word[j];
    if (j !== 0 && map.has(key) && word[j - 1] !== key) {
      groupword = false;
      break;
    } else {
      map.set(key, (map.get(key) || 0) + 1);
    }
  }
  if (groupword) answer++;
}
console.log(answer);