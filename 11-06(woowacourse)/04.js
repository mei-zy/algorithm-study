function solution(words){
  let answer=[];
  let left=0,right=0;
  let cnt=0;
  while(right<=words.length){
    if(words[left]===words[right]){
      cnt++;
      right++;
    }
    else{
      answer.push(cnt);
      left=right;
      cnt=0;
    }
  }
  if(words[0] === words[words.length-1]){
    answer[0]=answer[0]+answer.pop();
  }
  answer.sort((a,b)=>a-b);
  return answer;
}
console.log(solution("aaabbaaa"));
console.log(solution("wowwow"));