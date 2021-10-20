class minHeap{
    constructor(){
        this.heap=[];
        this.heap.push([Number.MIN_SAFE_INTEGER, 0]);
    }
    insert([a, b]){
        this.heap.push([a, b]);
        this.upheap(this.heap.length-1);
    }
    upheap(pos){
        let tmp=this.heap[pos];
        while(tmp[1]<this.heap[parseInt(pos/2)][1]){
            this.heap[pos]=this.heap[parseInt(pos/2)];
            pos=parseInt(pos/2);
        }
        this.heap[pos]=tmp;
    }
    get(){
        if(this.heap.length===2){
            return this.heap.pop();
        }
        let res;
        res=this.heap[1];
        this.heap[1]=this.heap.pop();
        this.downheap(1, this.heap.length-1);
        return res;
    }
    downheap(pos, len){
        let tmp, i;
        tmp=this.heap[pos];
        while(pos<=parseInt(len/2)){
            i=pos*2;
            if(i<len && this.heap[i][1]<this.heap[i+1][1]) i++;
            if(tmp[1]<=this.heap[i][1]) break;
            this.heap[pos]=this.heap[i];
            pos=i;
        }
        this.heap[pos]=tmp;
    }
    size(){
        return this.heap.length-1;
    }
    top(){
        return this.heap[1];
    }
}

function solution(n, edge) {
    var answer = 0;
    let minH=new minHeap();
    let graph=new Array(n+1);
    for(let i=0;i<n+1;i++) graph[i]=new Array();
    let dist=new Array(n+1).fill(1e9);

    for(let [a,b] of edge){
      graph[a].push(b);
      graph[b].push(a);
    }
    dist[0]=0;
    dist[1]=0;
    minH.insert([1,0]);
    while(minH.size()>0){
      let tmp=minH.get();
      let now=tmp[0];

      let nowCost=tmp[1];
      if(nowCost>dist[now]) continue;
      for(let next of graph[now]){
        if(nowCost + 1 < dist[next]){
          dist[next]=nowCost+1;
          minH.insert([next,dist[next]]);
        }
      }
    }
    let max=Math.max(...dist);
    for(let x of dist){
      if(x===max) answer++;
    }
    return answer;
}

console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));