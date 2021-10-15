const line = require("fs").readFileSync("./input.txt", "utf8");
let input = line.trim().split("\n"); 
const strToNumArr = (str) => str.split(" ").map((numString) => Number(numString));

// <---변수 선언 구절--->
// num= 전체 컴퓨터 수,
// pair= 컴퓨터 짝
let num=Number(input.shift()); //7
input.splice(0, 1);
// <------------------->
let map=new Array(num+1);
for(let i=1;i<num+1;i++) map[i]=new Array();
let visitedq=[];
let visited=new Array(num+1).fill(0);

let v1,v2;
input.forEach((str)=>{
  [v1, v2] = strToNumArr(str);
  map[v1].push(v2);
  map[v2].push(v1);
});

function search(node,searchnode){
  visitedq.push(searchnode);
  visited[searchnode]=1;

  while(visitedq.length!==0){
    for(let x of node[searchnode]){
      // console.log(x);
      if(visited[x]===1) continue;
      visitedq.push(x);
      if(visited[x]===0) visited[x]=1;
    }
    visitedq.shift();
    searchnode=visitedq[0];
  }
}

search(map,1);
let count=0;
for(let i=1;i<visited.length;i++)
  if(visited[i]===1) count++;

count-=1;
console.log(count);