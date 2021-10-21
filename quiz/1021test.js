function solution(n, nums) {
  let score = new Array(nums.length);
  let answer=0, max_min = 0;

  for (let i = 0; i < nums.length; i++) {
    score[i] = nums[i].shift();
    for (let j = 0; j < nums[i].length; j++)
      max_min = Math.max(max_min, nums[i][j]);
    // 최대  몇초인는지 체크
  }
  
  // 점수만 빼준다.
  // nums= [ [ 1, 3, 5 ], [ 2, 4 ], [ 1, 2 ], [ 3 ] ]

  let du = new Array(max_min + 1);
  for (let m = 1; m <= max_min; m++) du[m] = new Array();
  // 두더지가 올라오는 시간의 배열 생성


  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      let x = nums[i][j];
      du[x].push(score[i]);
      // du[1] : 1초에 올라오는 두더지 중 가장 큰 score을 넣어준다.
    }
  }

  // 두더지 내부 오름차순 정렬해서 가장 큰 것이 올 수 있게끔
  for(let k=1;k<=nums.length;k++){
    du[k].sort((a,b)=>a-b);
  }

  for (let i = 1; i <= max_min; i++) {
    let max = du[i][du[i].length-1];
    answer+=max;
  }

  return answer;
}

console.log(
  solution(2, [
    [1, 1, 3, 5],
    [2, 2, 4],
    [3, 1, 2],
    [4, 3],
  ])
);
