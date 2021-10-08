function sol(student){
  
  let max=answer=best=0;
  let n=student.length;

  for(let i=0;i<n;i++){
    best=0;
    for(let j=0;j<n;j++){
      for(let k=0;k<5;k++){
        if(student[i][k]===student[j][k]){
          best++;
          break;
        }
      }
    }
    if(best>max){
      max=best;
      answer=i;
    }
  }
  return answer+1;
}
console.log(sol([[2,3,1,7,3],[4,1,9,6,8],[5,5,2,4,4],[6,5,2,6,7],[8,4,2,2,2]]));