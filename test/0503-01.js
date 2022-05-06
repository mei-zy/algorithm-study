// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     // fixed 를 제외한 모든 부분을 붙여준다.
//     const permutations = getPermutations(rest, selectNumber - 1);
//     const attached = permutations.map((el) => [fixed, ...el]);

//     results.push(...attached);
//   });

//   return results;
// };

// const checkRightWord = (str) => {
//   let answer = true;
//   let stack = [];

//   if (str[0] === ")") answer = false;
//   else {
//     for (let s of str) {
//       if (s === "(") stack.push(s);
//       else if (s === ")") stack.pop();
//     }
//     if (stack.length !== 0) answer = false;
//   }

//   return answer;
// };

// function solution(n) {
//   var answer = 0;

//   const q = [];
//   for (let i = 0; i < n; i++) {
//     q.push("(");
//     q.push(")");
//   }

//   const result = getPermutations(q, q.length);
//   const set = new Set();

//   for (let i = 0; i < result.length; i++) {
//     const word = result[i].join("");
//     if (set.has(word)) continue;

//     set.add(word);
//     if (checkRightWord(word)) answer++;
//   }
//   return answer;
// }

// function solution(n) {
//   const dp = Array(n + 1).fill(0);

//   dp[0] = 1;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       // console.log(dp[i]);
//       dp[i] += dp[i - j] * dp[j - 1];
//     }
//   }
//   return dp[n];
// }

const solution = (n) => {
  let answer = 0;

  const dfs = (s, e) => {
    if (s > n || e > n || e > s) return;
    if (s === n && e === n) {
      answer++;
    } else {
      dfs(s + 1, e);
      dfs(s, e + 1);
    }
  };

  dfs(0, 0);
  return answer;
};
console.log(solution(3)); //5
// 4 =>14
// 5 =>42
// 132 => 6
//7 => 429
