function solution(n,k){
  let queue=new Array(n).fill().map((object,i)=>i+1);
  while(queue.length!==1){
    for(let i=0;i<k-1;i++)
      queue.push(queue.shift());
    queue.shift();

  }
  return queue.join('');
}

console.log(solution(8,3));