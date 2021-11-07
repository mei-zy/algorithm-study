
function solution(time){
  let totalHour=0;
  let startTime,endTime;
  let answer="";
  for(let i=0;i<time.length;i++){
    if((i+1)%2 !== 0){
      // start 타임인 경우
      startTime=time[i].split(":").map(Number);
    }
    else{
      // end까지 정해진 경우
      let tmpmin=0;
      let totalT=0;
      endTime=time[i].split(":").map(Number);
      if(startTime[1]>= endTime[1]){
        tmpmin=endTime[1]+60-startTime[1];
        endTime[0]--;
      }
      else{
        tmpmin=endTime[1]-startTime[1]; 
      }
      totalT=(60*(endTime[0]-startTime[0]))+tmpmin;
      if(totalT<5) continue;
      if(totalT>105) totalHour+=105;
      else totalHour+=totalT;
    }
  }
  let hour=String(parseInt(totalHour/60));
  let min=String(parseInt(totalHour%60));
  if(hour<10) hour="0"+hour;
  if(min<10) min="0"+min;

  answer=hour+":"+min;
  return answer;
}
console.log(solution(["08:30","9:00","14:00","16:00","16:01","16:06","16:07","16:11"]));
console.log(solution(["01:00","08:00","15:00","15:04","23:00","23:59"]));