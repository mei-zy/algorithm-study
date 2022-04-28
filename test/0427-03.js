// function solution(subway, S, E) {
//   var answer = Number.MAX_SAFE_INTEGER;

//   const graph = new Map();
//   const visited = [];

//   for (let i = 0; i < subway.length; i++) {
//     for (let next of subway[i]) {
//       if (graph.has(next)) {
//         graph.get(next).add(i);
//       } else {
//         const set = new Set();
//         set.add(i);
//         graph.set(next, set);
//       }
//     }
//   }

//   const bfs = () => {
//     const path = new Set();
//     let q = [S];
//     path.add(S);
//     let count = 0;

//     while (q.length) {
//       const tmp = [];
//       for (let i = 0; i < q.length; i++) {
//         for (let next of graph.get(q[i])) {
//           if (!visited[next]) {
//             for (let dx of subway[next]) {
//               if (!path.has(dx)) {
//                 if (dx === E) {
//                   answer = Math.min(answer, count);
//                   return;
//                 }
//                 path.add(dx);
//                 tmp.push(dx);
//               }
//             }
//           }
//           visited[next] = true;
//         }
//       }
//       count++;
//       q = tmp;
//     }
//   };
//   bfs();

//   if (S === E) answer = 0;
//   return answer;
// }

/* 해설 풀이 */
const solution = (subway, s, e) => {
  const map = new Map();
  const visited = new Array(subway.length).fill(false);
  const q = [s];
  let l = 0;

  for (let i = 0; i < subway.length; i++) {
    for (const stop of subway[i]) {
      if (map[stop] === undefined) {
        map[stop] = [];
      }
      map[stop].push(i);
    }
  }

  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      const currStop = q.shift();
      for (const sub of map[currStop]) {
        if (visited[sub]) continue;
        visited[sub] = true;
        for (const stop of subway[sub]) {
          if (stop === e) return l;
          q.push(stop);
        }
      }
    }
    l++;
  }

  return -1;
};
console.log(
  solution(
    [
      [1, 2, 7],
      [3, 6, 7],
    ],
    1,
    6
  )
);

console.log(
  solution(
    [
      [7, 12],
      [5, 19],
      [7, 19],
      [9, 12, 13],
      [9, 5, 15],
    ],
    9,
    19
  )
);
