function solution(str){

  let dx=[1,0,1,0];
  let dy=[0,-1,0,1];
  let answer=0;
  let n=str[0].length;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      let flag=1;
      for(let k=0;k<dx.length;k++){
        let nx=i+dx[k];
        let ny=j+dy[k];

        if(nx>=0 && nx<n && ny>=0 && ny<n && str[nx][ny]>=str[i][j]){
          flag=0;
          break;
        }
      }
      if(flag) answer++;
    }
  }
  return answer;


}
console.log(solution([[5,3,7,2,3],[3,7,1,6,1],[7,2,5,3,4],[4,3,6,4,1],[8,7,3,5,2]]));
