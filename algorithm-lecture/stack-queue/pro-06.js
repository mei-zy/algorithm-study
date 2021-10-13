function solution(need, plan){
  let queue=[]
  for(let x of need)
    queue.push(x);

  for(let x of plan){
    if(queue.includes(x)){
      if(x!==queue.shift()) return "NO";
    }
  }
  if(queue.length!==0) return "NO";
  return "YES";
}
console.log(solution("CBA","CBDAGE"));
console.log(solution("CBA","CADBAGE"));