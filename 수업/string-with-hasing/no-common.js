// 서로 공통문자가 없는 두 문자열을 선택해 두 문자열의 길이를 곱했을 때 최댓값

function solution(str){
  let answer=0;
  let tmp;
  str.sort((a,b)=>a.length-b.length);
  // 1. 짧은게 먼저 올 수 있게하기
  for(let i=0;i<str.length-1;i++){
    for(let j=i+1;j<str.length;j++){
      if(isUniqe(str[i],str[j])){
        tmp=str[i].length*str[j].length;
        answer=Math.max(tmp,answer);
      }
    }
  }
  return answer;
}
function isUniqe(short,long){
  // 같은 문자가 있으면 false 리턴, 같은 문자가 없으면 true 리턴
  for(let x of short){
    if(long.indexOf(x)!==-1)
      return false;
  }
  return true;
}

console.log(solution(["skudy","kstue","time","back","good"]));
console.log(solution(["kk","k","kkk","kkkkk","kkkk"]));