function solution(s){
  s.sort((x,y)=>x.length-y.length);
  // 1. 글자길이 오름차순 정렬
  let size=s[0].length;
  
  let cnt=0;
  for(let i=0;i<size;i++){
    cnt++;
    if(s[0][i]==s[1][i] && s[0][i]==s[2][i]){
      continue;
    }
    else
      break;

  }
  return cnt;

}

let array=["seeasue","sesseysu","semeas"];
console.log(solution(array));