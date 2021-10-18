function solution(nums){
  let len=nums.length;
  let mid=parseInt(len/2);

  // 하얀돌의 sum값을 구하는 것
  function wsum(arr){
    let white_sum=0;
    for(let s of arr)
      white_sum+=nums[s-1][0];
    return white_sum;
  }
  function bsum(arr){
    let black_sum=0;
    let newtmp=[];
    for(let j=1;j<=len;j++){
      if(!arr.includes(j)) newtmp.push(j);
    }
    // 하얀돌 외의 검은돌의 배열
    for(let s of newtmp)
      black_sum+=nums[s-1][1];
    return black_sum;
  }
  let answer=Number.MAX_SAFE_INTEGER;
  let answer2=[];
  let tmp=[];
  function DFS(L, s){
    if(L===mid){
      let white=wsum(tmp);
      let black=bsum(tmp);
      answer=Math.min(answer, Math.abs(white-black));
    }
    else{
        for(let i=s; i<=len; i++){
            tmp.push(i);
            DFS(L+1, i+1);
            tmp.pop();
        }
    }
  }

  DFS(0,1);
  return answer;
}
console.log(solution([[87,84],[66,78],[94,94],[93,87],[72,92],[78,63]]));