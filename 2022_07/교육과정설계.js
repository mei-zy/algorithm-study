const solution = (list, plan) => {
  let answer = "YES";
  let queue = list.split("");

  for (let x of plan) {
    if (queue.includes(x)) {
      // 이수과목이면
      if (x !== queue.shift()) {
        // 이수과목에 포함되어있지만 순서가 안맞다는 뜻
        return "NO";
      } else {
        // 이수과목에 포함되어있고 순서도 맞으면 큐에서 해당과목 제거
        queue.shift();
      }
    }
  }
  if (queue.length > 0) {
    return "NO";
  }
  return answer;
};

const list = "CBA";
const plan = "CBDAGE";
console.log(solution(list, plan));
