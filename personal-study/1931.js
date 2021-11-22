const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n=Number(input[0]);
// console.log(n);
let arr=new Array();
for(let i=0;i<n;i++){
  let [a,b]=input[i+1].split(' ').map(Number);
  arr.push([a,b]);
}

arr.sort((a,b)=> {
  if(a[1]===b[1]) return a[0]-b[0];
  return a[1]-b[1];
})

let answer=1; 
let cur=arr[0][1];
for(let i=1;i<n;i++){
  if(cur<=arr[i][0]){
    answer++;
    cur=arr[i][1];
  }
}
console.log(answer);