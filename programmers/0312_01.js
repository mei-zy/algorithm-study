function solution(money, costs) {
  var answer = 0;

  const coin = [1, 5, 10, 50, 100, 500];
  let sorting = [];

  for (let i = 0; i < costs.length; i++) {
    sorting.push([coin[i], costs[i], coin[i] / costs[i]]);
  }

  sorting.sort((a, b) => b[2] - a[2]);
  // console.log(sorting);

  for (let i = 0; i < sorting.length; i++) {
    const [curmoney, needMoney, value] = sorting[i];

    const need = parseInt(money / curmoney);
    money -= curmoney * need;
    answer += need * needMoney;
  }

  return answer;
}
console.log(solution(4578, [1, 4, 99, 35, 50, 1000]));
console.log(solution(1999, [2, 11, 20, 100, 200, 600]));
