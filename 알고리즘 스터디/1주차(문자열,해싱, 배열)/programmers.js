function solution(participant, completion) {
  let answer;
  let hash=new Map();
  for(let i=0;i<participant.length;i++){
      hash.set(participant[i],(hash.get(participant[i])||0)+1);
  }
//     데이터 넣어주기
  for(let j=0;j<completion.length;j++){
      hash.set(completion[j],hash.get(completion[j])-1);
      if(hash.get(completion[j])===0)
          hash.delete(completion[j]);
  }
  for(let [k,v] of hash){
    answer=k;
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"]));