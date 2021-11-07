// 순열 사이클
const { log } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let routine=Number(input[0]);

for(let i=0;i<routine;i++){
  input.shift();
  let graph=input[i+1].split(' ').map(Number);
  let visited=new Array(graph.length+1).fill(0);
  visited[0]=1e9;

  function DFS(L, startNum){
    if(L===startNum){
      visited[startNum]=1;
      return;
    }
    else{
      visited[L]=1;
      DFS(graph[L-1],startNum);
    }
  }
  let cnt=0;
  for(let i=0;i<graph.length;i++){
    if(!visited.includes(0)){
      break;
    }
    if(visited[i+1]===0){
      DFS(graph[i],i+1);  
      cnt++;
    }

  }
  // DFS(graph[0],1);
  // console.log(visited);
  console.log(cnt);
}