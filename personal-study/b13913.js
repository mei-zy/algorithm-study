const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
splited=input[0].split(' ');

let N=Number(splited[0]);
let K=Number(splited[1]);
let arr=new Array(100001).fill(0);

let answer=0;
let flag=false;
function BFS(){
  let queue=[];
  queue.push(N);
  arr[N]=1;
  while(queue.length){
    let len=queue.length;
    for(let i=0;i<len;i++){
      let x=queue.shift();
      if(x===K) {
        flag=true;
        break;
      }
      for(let nx of [x-1,x+1,2*x]){
        if(arr[nx]===0){
          queue.push(nx);
          arr[nx]=x;
        }
      }
    }
    if(flag) break;
    answer++;
  }
}
BFS();
let answer2=new Array();
let searchX=K;
while(K!==N){
  answer2.push(K);
  K=arr[K];
}
answer2.push(N);
answer2.reverse();
console.log(answer);
console.log(answer2.join(' '));