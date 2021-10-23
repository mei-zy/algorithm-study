

function solution(s) {
  let answer = "";

  let hashM = new Map();
  for (let i = 0; i < s.length; i++) {
    let key = s[i];
    hashM.set(key, (hashM.get(key) || 0) + 1);
  }

  let mapSort=[...hashM].sort(function(a, b) { 
    return (a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0)||(a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0) ; 
  });

  // console.log(mapSort);
  for(let [k,v] of mapSort){
    answer+=k.repeat(v);
  }

  return answer;
}
console.log(solution("aaAAcccbbbBB"));
console.log(solution("kdkDKKGkdkgks"));
