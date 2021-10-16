// let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let input = require("fs").readFileSync("./input.txt").toString().split("\n");
// n=수빈이 있는 위치
// k= 동생이 있는 위치

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

function solution(n, k) {
  let queue = [];
  let checked = new Array(100001).fill(0);
  let L = answer =0;
  function BFS() {
    // 1. 먼저 초기 설정  -> 5를 넣어준다.
    queue.push(n);
    checked[n] = 1;
    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let x = queue.shift();
        if (x === k) return L;
        for (let nv of [x - 1, x + 1, x * 2]) {
          if (checked[nv] === 0 && nv >= 0 && nv <= 100000) {
            queue.push(nv);
            checked[nv] = 1;
          }
        }
      }
      L++;
    }
  }

  if (n === k) return 0;
  else {
    answer = BFS();
    return answer;
  }
}
console.log(solution(n, k));
