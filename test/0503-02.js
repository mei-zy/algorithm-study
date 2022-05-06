// function solution(s) {
//   var answer = 0;
//   const len = s.length;

//   const dfs = (level) => {
//     if (level === len) {
//       answer++;

//       // let string = "";
//       // for (let i = 0; i < str.length; i++) {
//       //   const re = String.fromCharCode(Number(str[i]) + 64);
//       //   string += re;
//       // }
//       return;
//     }

//     for (let i = level + 1; i <= level + 2; i++) {
//       if (i > len) continue;
//       const result = s.slice(level, i);

//       if (Number(result) >= 1 && Number(result) <= 26) {
//         //console.log("level", level, "result", result);
//         if (result.length === 1) dfs(level + 1);
//         else dfs(level + 2);
//       }
//     }
//   };

//   dfs(0);
//   return answer;
// }

const solution = (s) => {
  const dp = Array(120).fill(0);

  const dfs = (level) => {
    if (s[level] === "0") return 0;
    if (dp[level] > 0) return dp[level];

    if (level === s.length - 1 || level === s.length) return 1;

    let answer = dfs(level + 1);
    let tmp = parseInt(s.substring(level, level + 2));
    if (tmp <= 26) answer += dfs(level + 2);

    return (dp[level] = answer);
  };

  return dfs(0, 0);
};
console.log(solution("10")); //1
// console.log(solution("111111111111111")); 1836311903
// console.log(solution("10")); 1
// console.log(solution("15114")); 6
// console.log(solution("1115213102")); 9
// console.log(solution("12015"))
