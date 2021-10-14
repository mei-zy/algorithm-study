function solution(n){
  function recur(L){
    if(L===0) return;
    else{
      recur(parseInt(L/2));
      console.log(parseInt(L%2));
    }
  }
  recur(11);
}

console.log(solution(3));