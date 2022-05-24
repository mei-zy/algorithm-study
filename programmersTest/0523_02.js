function solution(s, e) {
  let answer = 0;

  const bfs = () => {
    let ch = Array.from(Array(2), () => Array(200001).fill(0));

    let q = [];
    q.push(s);
    ch[0][s] = 1;

    let L = 0;

    while (q.length) {
      let len = q.length;
      e = e + L;

      if (e > 200000) {
        return -1;
      }

      if (ch[L % 2][e] === 1) {
        return L;
      }
      L++;

      for (let i = 0; i < len; i++) {
        let x = q.shift();
        for (let nx of [x - 1, x + 1, x * 2]) {
          if (nx > 0 && nx <= 200000 && ch[L % 2][nx] === 0) {
            ch[L % 2][nx] = 1;
            q.push(nx);
          }
        }
      }
    }
  };
  answer = bfs();

  return answer;
}

console.log(solution(5, 6));
