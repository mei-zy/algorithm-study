const inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
let dy = [0, 1, 1, 1, 0, -1, -1, -1];
let index = 0;
while (inputs[index][0] != 0) {
  const [w, h] = inputs[index].split(" ").map(Number);
  let map = Array.from({ length: h }, (_, i) =>
    inputs[index + i + 1].split(" ").map(Number)
  );

  function DFS(currentnx, currentny){
    for(let i=0;i<8;i++){
      let nx=currentnx+dx[i];
      let ny=currentny+dy[i];
      if(nx>=0 && nx<h && ny>=0 && ny<w && map[nx][ny]===1){
        // 1이면 방문해야하는 섬이다.
        map[nx][ny]=0;
        DFS(nx, ny);
      }
    }
  }
  let answer=0;
  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(map[i][j]===1){
        DFS(i,j);
        answer++;
      }
    }
  }
  console.log(answer);
  index += h + 1;
}
