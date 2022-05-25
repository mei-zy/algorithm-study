// 네이버파이낸셜
function solution(cities, roads, cars, customers) {
  let answer = [];

  const graph = Array.from(Array(26), () => []);
  const dp = Array.from(Array(26), () => Array(26).fill(Infinity));
  const carInfo = Array.from(Array(26), () => []);

  for (let i = 0; i < roads.length; i++) {
    let [from, to, w] = roads[i].split(" ");
    [from, to] = [from.charCodeAt(0) - 97, to.charCodeAt(0) - 97];

    graph[from].push([to, Number(w)]);
    graph[to].push([from, Number(w)]);
  }

  // 최단 경로 구하기

  for (let city of cities) {
    const baseCity = city.charCodeAt(0) - 97;
    const priorityQ = [[baseCity, 0]];
    dp[baseCity][baseCity] = 0;

    while (priorityQ.length) {
      const [currentNode, currentCost] = priorityQ.shift();

      for (let [nextNode, nextCost] of graph[currentNode]) {
        const tempCost = currentCost + nextCost;

        if (tempCost >= dp[baseCity][nextNode]) continue;

        dp[baseCity][nextNode] = tempCost;

        let flag = false;
        for (let i = 0; i < priorityQ.length; i++) {
          const [n, c] = priorityQ[i];
          if (n === nextNode) {
            priorityQ[i] = [n, tempCost];
            flag = true;
          }
        }

        if (!flag) {
          priorityQ.push([nextNode, tempCost]);
        }
      }

      priorityQ.sort();
    }
  }

  // car에 대한 정보
  for (let i = 0; i < cars.length; i++) {
    let [city, maxW, cost] = cars[i].split(" ");
    [city, maxW, cost] = [city.charCodeAt(0) - 97, Number(maxW), Number(cost)];

    carInfo[city].push([maxW, cost]);
  }

  // carInfo 정렬
  for (let i = 0; i < cars.length; i++) {
    let [city, maxW, cost] = cars[i].split(" ");
    [city, maxW, cost] = [city.charCodeAt(0) - 97, Number(maxW), Number(cost)];

    carInfo[city].sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  }

  // 최소 값 구하기
  for (let i = 0; i < customers.length; i++) {
    let [from, to, w] = customers[i].split(" ");
    [from, to, w] = [from.charCodeAt(0) - 97, to.charCodeAt(0) - 97, Number(w)];

    let minNode;
    let minCost = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < 26; j++) {
      if (dp[j][to] === Infinity) continue;
      let movingCost = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < carInfo[j].length; k++) {
        const [weight, costs] = carInfo[j][k];
        if (weight < w) continue;
        movingCost = costs;
        break;
      }

      if (movingCost === Number.MAX_SAFE_INTEGER) {
        continue;
      }

      const fromPath = dp[from][j];
      const toPath = dp[from][to];
      const sum = (fromPath + toPath) * movingCost;

      if (sum === minCost) continue;
      minCost = Math.min(minCost, sum);
      if (sum === minCost) {
        minNode = j;
      }
    }

    answer.push(String.fromCharCode(minNode + 97));
  }
  return answer;
}

console.log(
  solution(
    ["a", "b", "c"],
    ["a b 1", "a c 1", "b c 1"],
    ["a 100 10", "b 300 20", "c 50 4"],
    ["a b 100", "a b 30", "c a 250"]
  )
);

console.log(
  solution(
    ["a", "b", "c", "d", "e", "f", "g"],
    ["a b 1", "a c 1", "c d 3", "c d 3", "b d 5", "b e 6", "d e 2", "f g 8"],
    [
      "a 100 10",
      "a 200 15",
      "b 100 5",
      "c 20 2",
      "c 300 30",
      "d 200 20",
      "e 500 100",
      "f 500 50",
      "g 100 40",
    ],
    ["g f 200", "c e 50", "d a 500", "a b 50"],
    ["f", "b", "e", "a"]
  )
);
