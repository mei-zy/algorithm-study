// 각 구간별 매출액의 종류를 출력하는 프로그램
function solution(arr,k){
  let start=0;
  let sales=new Map();

  let answer=new Array();
  // 1. setting
  for(let i=0;i<k-1;i++)
    sales.set(arr[i],(sales.get(arr[i])||0)+1);

    for(let end=k-1;end<arr.length;end++){
      sales.set(arr[end],(sales.get(arr[end])||0)+1);
      // 여기서 윈도우가 완성됐다. 
      answer.push(sales.size);

      // 이제 lt가 가르키는 애를 빼주어야한다.
      sales.set(arr[start],(sales.get(arr[start])-1));
      if(sales.get(arr[start])===0) sales.delete(arr[start]);
      start++;
    }
    return answer;
}



console.log(solution([20,12,20,10,23,17,10],4));