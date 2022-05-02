const maximmumUnique = (cards) => {
  let min = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < 3; i++) {
    min = Math.min(min, cards[i]);
  }

  let answer = 0;
  for (let j = 0; j < 3; j++) {
    if (min === cards[j]) answer++;
  }

  const result = answer > 1 ? false : true;

  return result;
};

const maximummIndex = (cards) => {
  let min = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < 3; i++) {
    min = Math.min(min, cards[i]);
  }

  let answer = 0;
  for (let j = 0; j < 3; j++) {
    if (min === cards[j]) answer = j;
  }

  return answer;
};

function solution(cards) {
  const len = cards.length;

  const used = Array(len).fill(false);

  for (let i = 0; i < len; i++) {
    if (!maximmumUnique(cards[i])) continue;
    if (used[i]) continue;
    for (let j = 0; j < len; j++) {
      if (!maximmumUnique(cards[j])) continue;
      if (used[j]) continue;

      const a = maximummIndex(cards[j]);
      const b = maximummIndex(cards[i]);

      if (a != b && cards[i][b] > 0 && cards[j][a] > 0) {
        if (
          caches[i][b] - 1 >= cards[i][a] + 1 &&
          cards[j][a] - 1 >= cards[j][b] + 1
        ) {
          cards[i][b]--;
          cards[j][a]--;
          cards[i][a]++;
          cards[j][b]++;
          used[i] = used[j] = true;
          break;
        }
      }
    }
  }

  let score = 0;
  for (let i = 0; i < len; i++) {
    const result = maximummIndex(cards[i]);
    score += result;
  }
  return score;
}

console.log(
  solution([
    [10, 5, 15],
    [5, 15, 10],
    [10, 11, 9],
  ])
);
