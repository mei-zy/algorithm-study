function solution(N, stages) {
  var answer = [];

  let players = 0;

  let total_stage = new Array(N).fill(0);
  for (let player of stages) {
    player <= N ? total_stage[player - 1]++ : false;
    players++;
  }

  let mapH = new Map();
  total_stage.map((player, i) => {
    mapH.set(i + 1, player / players);
    players -= player;
  });
  console.log(mapH);
  const tmp = [...mapH].sort((player1, player2) => (player1[1] < player2[1] ? 1 : player1[1] > player2[1] ? -1 : 0));
  for (let x of tmp) answer[answer.length] = x[0];
  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
