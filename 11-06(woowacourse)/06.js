function solution(time, plans) {
  var answer = "";
  let fridayH=18, mondayH=13;
  // 금요일은 18시, 월요일은 13시

  
  for(let x of plans){
    let resttime=0;
    let departure=Number(x[1].replace(/[^0-9]/g,""));
    if(x[1].replace(/[0-9]/g,"") === "PM") departure+=12;
    let arrived=Number(x[2].replace(/[^0-9]/g,""));
    if(x[2].replace(/[0-9]/g,"") === "PM") arrived+=12;
    
    if(fridayH>departure) resttime+=fridayH-departure;
    if(mondayH<arrived) resttime+=arrived-mondayH;
    
    if(resttime>time)continue;
    answer=x[0];
  }

  return answer;
}

console.log(
  solution(3.5, [
    ["홍콩", "11PM", "9AM"],
    ["엘에이", "3PM", "2PM"],
  ])
); // "홍콩"