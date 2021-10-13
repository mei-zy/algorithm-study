function solution(clothes) {
  var answer =1 ;
  let hash=new Map();

  // 1. 해쉬에 먼저 넣기
  for(let i=0;i<clothes.length;i++){
    hash.set(clothes[i][1],(hash.get(clothes[i][1])||0)+1); 
  }

  let sum=hash.size;

  for(let [k,v] of hash){
    answer*=(v+1);
    // 다른 거 선택하고 다른거 선택하지 않는 경우
  }
  // 아무것도 안입는 경우는 없으니까
  return answer-1;

}
console.log(solution([["crowmask", "head"], ["bluesunglasses", "face"], ["smoky_makeup", "eye                                                                                                                                                               "]]));
console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]));