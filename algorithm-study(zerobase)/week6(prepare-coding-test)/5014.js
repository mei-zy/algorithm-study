const { log } = require("console");
const fs = require("fs");
const { isBuffer } = require("util");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [F,S,G,U,D]=input[0].split(' ').map(Number);
/*
let visited=new Array(F+1).fill(false);
let time=0;
let flag=false;
function BFS(){
  let queue=[];

  queue.push(S);
  visited[S]=true;
  while(queue.length){
    let len=queue.length;
    for(let i=0;i<len;i++){
      let x=queue.shift();
      if(x===G) {
        flag=true;
        break;
      }
      if(x+U <=F && visited[x+U]===false){
        queue.push(x+U);
        visited[x+U]=true;
      }
      if(x-D >= 1 && visited[x-D]===false){
        queue.push(x-D);
        visited[x-D]=true;
      }
    }
    time++;
  }
}
BFS();
if(flag) console.log(time-1);
else console.log("use the stairs");
*/

let visited=new Array(F+1).fill(false);
let time=0;
let flag=true;
function BFS(){
  let queue=[];
  queue.push(S);
  visited[S]=true;
  while(queue.length){
    let len=queue.length;
    for(let i=0;i<len;i++){
      let x=queue.shift();
      if(x===G){
        flag=false;
        break;
      }
      // up 누른 경우의 체크
      if((x+U) <= F && visited[x+U]===false){
        // 범위 안에 맞고, 방문하지 않은 노드일 때
        queue.push(x+U);
        visited[x+U]=true;
      }
      if((x-D)>=1 && visited[(x-D)]===false){
        queue.push(x-D);
        visited[x-D]=true;
      }
    }
    if(!flag) break;
    time++;
  }
}

BFS();
if(!flag) console.log(time);
else console.log("use the stairs");